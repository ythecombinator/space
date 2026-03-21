import type { AnySchema, Orama, PartialSchemaDeep, Schema } from '@orama/orama';
import { create, insertMultiple, search } from '@orama/orama';
import { createContext, type ReactNode, Suspense, useContext, useMemo, useRef } from 'react';
import { suspend } from 'suspend-react';

//  ---------------------------------------------------------------------------
//  SEARCH ENGINE (internal)
//  ---------------------------------------------------------------------------

class SearchEngine<S extends AnySchema, D extends PartialSchemaDeep<Schema<S>>> {
  readonly schema: S;
  readonly data: ReadonlyArray<D>;
  private instance: Orama<S> | null = null;
  private ready = false;

  constructor(schema: S, data: ReadonlyArray<D>) {
    this.schema = schema;
    this.data = data;
  }

  async init() {
    if (this.ready) return;
    this.instance = await create({ schema: this.schema });
    await insertMultiple(this.instance, this.data as Array<D>);
    this.ready = true;
  }

  async search(term: string): Promise<Array<D>> {
    await this.init();
    const db = this.instance;
    if (!db) throw new Error('SearchEngine: index not built');
    const result = await search<Orama<S>, D>(db, {
      term,
      properties: '*',
    });
    return result.hits.map((hit) => hit.document);
  }
}

//  ---------------------------------------------------------------------------
//  CONTEXT
//  ---------------------------------------------------------------------------

interface SearchContextValue {
  engine: SearchEngine<any, any>;
  data: ReadonlyArray<unknown>;
}

const SearchContext = createContext<SearchContextValue | null>(null);

//  ---------------------------------------------------------------------------
//  PROVIDER
//  ---------------------------------------------------------------------------

interface SearchProviderProps<S extends AnySchema, D extends PartialSchemaDeep<Schema<S>>> {
  schema: S;
  data: Array<D>;
  fallback?: ReactNode;
  children: ReactNode;
}

/**
 * Provides an Orama full-text search index to descendant components.
 * Wraps children in a `<Suspense>` boundary with an optional fallback.
 *
 * @param schema  - Orama schema defining searchable fields
 * @param data    - Documents to index
 * @param fallback - React node shown while the search suspends
 */
function SearchProvider<S extends AnySchema, D extends PartialSchemaDeep<Schema<S>>>({
  schema,
  data,
  fallback,
  children,
}: SearchProviderProps<S, D>) {
  const prevDataRef = useRef(data);
  const engineRef = useRef<SearchEngine<S, D> | null>(null);

  if (!engineRef.current || prevDataRef.current !== data) {
    engineRef.current = new SearchEngine(schema, data);
    prevDataRef.current = data;
  }

  const value = useMemo<SearchContextValue>(
    () => ({ engine: engineRef.current!, data }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  return (
    <SearchContext.Provider value={value}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </SearchContext.Provider>
  );
}

//  ---------------------------------------------------------------------------
//  HOOK
//  ---------------------------------------------------------------------------

/**
 * Suspendable search hook backed by Orama full-text search.
 *
 * Must be rendered inside a `<SearchProvider>`.
 * Returns all documents when `term` is empty; suspends while searching.
 */
function useSearch<D>(term: string): Array<D> {
  const ctx = useContext(SearchContext);

  if (!ctx) {
    throw new Error('useSearch must be used within a <SearchProvider>');
  }

  const { engine, data } = ctx;

  if (term === '') {
    return data as Array<D>;
  }

  return suspend(async () => engine.search(term), ['useSearch', term, engine]) as Array<D>;
}

export { SearchProvider, useSearch };


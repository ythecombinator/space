import { create, insertMultiple, search } from '@orama/orama';
import type { Orama, PartialSchemaDeep, Schema } from '@orama/orama';
import { useMemo } from 'react';
import { suspend } from 'suspend-react';

class Searcher<SearchSchema, ResultSchema extends PartialSchemaDeep<Schema<SearchSchema>>> {
  schema: SearchSchema;
  documents: Array<ResultSchema>;
  searchInstance: Orama<SearchSchema>;

  constructor(schema: SearchSchema, documents: Array<ResultSchema>) {
    this.schema = schema;
    this.documents = documents;
  }

  async init() {
    this.searchInstance = await create({ schema: this.schema });
    await insertMultiple(this.searchInstance, this.documents);
  }

  async find(term: string) {
    return search<typeof this.searchInstance, ResultSchema>(this.searchInstance, {
      term,
      properties: '*',
    });
  }

  async findDocument(term: string) {
    const result = await this.find(term);
    return result.hits.map((hit) => hit.document);
  }
}

export const useSearch = <SearchSchema, ResultSchema extends PartialSchemaDeep<Schema<SearchSchema>>>(
  schema: SearchSchema,
  documents: Array<ResultSchema>,
  searchTerm: string
) => {
  const searcher = useMemo(() => new Searcher(schema, documents), []);

  if (searchTerm === '') {
    return documents;
  }

  const results = suspend(async () => {
    await searcher.init();
    return searcher.findDocument(searchTerm);
  }, [searchTerm, JSON.stringify(documents)]);

  return results as Array<ResultSchema>;
};

const INDEXABLE_COLLECTION_SEPARATOR = ' • ';

export const toIndexableCollection = <SearchSchema>(arr: Array<SearchSchema>) =>
  arr.join(INDEXABLE_COLLECTION_SEPARATOR);

import { create, insertBatch, search } from '@lyrasearch/lyra';
import {
  Lyra,
  PropertiesSchema,
  ResolveSchema,
} from '@lyrasearch/lyra/dist/types';
import { useMemo } from 'react';
import { suspend } from 'suspend-react';

class Searcher<T extends PropertiesSchema> {
  schema: PropertiesSchema;
  documents: Array<ResolveSchema<T>>;
  searchInstance: Lyra<PropertiesSchema>;

  constructor(schema: PropertiesSchema, documents: Array<ResolveSchema<T>>) {
    this.schema = schema;
    this.documents = documents;
  }

  async init() {
    this.searchInstance = await create({ schema: this.schema });
    await insertBatch(this.searchInstance, this.documents);
  }

  async find(term: string) {
    return search(this.searchInstance, {
      term,
      properties: '*',
    });
  }

  async findDocument(term: string) {
    const result = await this.find(term);
    return result.hits.map((hit) => hit.document);
  }
}

export const useLyraSearch = <T extends {}>(
  schema: PropertiesSchema,
  documents: Array<T>,
  searchTerm: string
) => {
  if (searchTerm === '') {
    return documents;
  }

  const searcher = useMemo(() => new Searcher(schema, documents), []);

  const results = suspend(async () => {
    await searcher.init();
    const result = await searcher.findDocument(searchTerm);
    return result;
  }, [searchTerm, JSON.stringify(documents)]);

  return results as Array<T>;
};

const INDEXABLE_COLLECTION_SEPARATOR = ' • ';

export const toIndexableCollection = <T>(arr: Array<T>) =>
  arr.join(INDEXABLE_COLLECTION_SEPARATOR);

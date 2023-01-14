import { create, insertBatch, search } from '@lyrasearch/lyra';
import {
  Lyra,
  PropertiesSchema,
  ResolveSchema,
} from '@lyrasearch/lyra/dist/types';
import { useMemo } from 'react';
import { suspend } from 'suspend-react';

class Searcher<T extends ResolveSchema<PropertiesSchema>> {
  schema: PropertiesSchema;
  initialState: Array<T>;
  searchInstance: Lyra<PropertiesSchema>;

  constructor(schema: PropertiesSchema, initialState: Array<T>) {
    this.schema = schema;
    this.initialState = initialState;
  }

  async init() {
    this.searchInstance = await create({ schema: this.schema });
    await insertBatch(this.searchInstance, this.initialState);
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

export const useLyraSearch = <T>(
  schema: PropertiesSchema,
  initialState: Array<T>,
  searchTerm: string
) => {
  if (searchTerm === '') {
    return initialState;
  }

  const searcher = useMemo(() => new Searcher(schema, initialState), []);

  const results = suspend(async () => {
    await searcher.init();
    const result = searcher.findDocument(searchTerm);
    return result;
  }, [searchTerm]);

  return results as T[];
};

import { Client, isFullDatabase, isFullPage } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export default class NotionService {
  private static instance: NotionService;
  private client: Client;
  private dataSourceIds = new Map<string, string>();

  private constructor() {
    this.client = new Client({
      auth: process.env.NOTION_TOKEN,
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new NotionService();
    }

    return this.instance;
  }

  private async getDataSourceId(databaseId: string): Promise<string> {
    const cachedDataSourceId = this.dataSourceIds.get(databaseId);

    if (cachedDataSourceId) {
      return cachedDataSourceId;
    }

    const database = await this.client.databases.retrieve({
      database_id: databaseId,
    });

    if (!isFullDatabase(database)) {
      throw new Error(`Database ${databaseId} could not be fully retrieved from Notion.`);
    }

    const [dataSource] = database.data_sources;

    if (!dataSource) {
      throw new Error(`Database ${databaseId} has no data source available for querying.`);
    }

    this.dataSourceIds.set(databaseId, dataSource.id);

    return dataSource.id;
  }

  public async queryDatabase(databaseId: string): Promise<PageObjectResponse[]> {
    const dataSourceId = await this.getDataSourceId(databaseId);
    const results: PageObjectResponse[] = [];
    let nextCursor: string | undefined;

    do {
      const response = await this.client.dataSources.query({
        data_source_id: dataSourceId,
        page_size: 100,
        start_cursor: nextCursor,
        result_type: 'page',
      });

      results.push(...response.results.filter(isFullPage));
      nextCursor = response.next_cursor ?? undefined;
    } while (nextCursor);

    return results;
  }
}

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type NotionPageResponse = PageObjectResponse;

import { Client as NotionClient } from '@notionhq/client';

/*~
 * SERVICE
 */

export default class NotionService {
  private static instance: NotionService;
  private notionClient: NotionClient;

  private constructor() {
    this.notionClient = new NotionClient({
      auth: process.env.NOTION_TOKEN,
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new NotionService();
    }

    return this.instance;
  }

  public async queryDataBase<T>(id: string) {
    const response = await this.notionClient.databases.query({
      database_id: id,
    });

    return response.results as NotionResponse[];
  }
}

/*~
 * TYPES
 */

export interface NotionResponse {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Author;
  last_edited_by: Author;
  cover?: null;
  icon: Icon;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url?: null;
}

export interface Author {
  object: string;
  id: string;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  event: TitleProperty;
  city: RichTextProperty;
  country: SelectProperty;
  website: RichTextProperty;
  dates: DateProperty;
  cfp: RichTextProperty;
  deadline: DateProperty;
  duration: NumberProperty;
  result: SelectProperty;
  'result-followup': SelectProperty;
  'result-followup-reason': SelectProperty;
  'sessions-approved': MultiSelectProperty;
  'sessions-submitted': MultiSelectProperty;
  'previously-accepted': SelectProperty;
}

/*~
 * PROPERTIES
 */

export interface RichTextProperty {
  id: string;
  type: string;
  rich_text: RichTextEntry[];
}

export interface SelectProperty {
  id: string;
  type: string;
  select: SelectEntry;
}

export interface MultiSelectProperty {
  id: string;
  type: string;
  multi_select: SelectEntry[];
}

export interface DateProperty {
  id: string;
  type: string;
  date: DateEntry;
}

export interface NumberProperty {
  id: string;
  type: string;
  number: number;
}

export interface TitleProperty {
  id: string;
  type: string;
  title: RichTextEntry[];
}

/*~
 * ENTRIES
 */

export interface RichTextEntry {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: string | null;
}

export interface SelectEntry {
  id: string;
  name: string;
  color: string;
}

export interface DateEntry {
  start: string;
  end: string;
}

/*~
 * PRIMITIVES
 */

export interface Text {
  content: string;
  link?: Link | null;
}

export interface Link {
  url: string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

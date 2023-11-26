/*~
 * CONFIG
 */

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const PLAYLIST_ITEMS_API = `${BASE_URL}/playlistItems`;
const VIDEO_API = `${BASE_URL}/videos`;

/*~
 * SERVICE
 */

export default class YoutubeService {
  private static instance: YoutubeService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new YoutubeService();
    }

    return this.instance;
  }

  public async queryPlaylist(id: string): Promise<YoutubeResponse> {
    const queryURL = new URL(PLAYLIST_ITEMS_API);

    queryURL.searchParams.set('part', 'snippet');
    queryURL.searchParams.set('playlistId', id);
    queryURL.searchParams.set('maxResults', '50');
    queryURL.searchParams.set('key', `${process.env.YOUTUBE_API_KEY}`);

    const response = await fetch(queryURL.toString());
    return response.json();
  }

  public async queryVideo(id: string): Promise<YoutubeResponse> {
    const queryURL = new URL(VIDEO_API);

    queryURL.searchParams.set('part', ['statistics', 'snippet'].join(','));
    queryURL.searchParams.set('id', id);
    queryURL.searchParams.set('key', `${process.env.YOUTUBE_API_KEY}`);

    const response = await fetch(queryURL.toString());
    return response.json();
  }
}

/*~
 * TYPES
 */

export interface YoutubeResponse {
  kind: string;
  etag: string;
  items: Item[];
  pageInfo: Pagination;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceID;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface Thumbnails {
  default: Resolution;
  medium: Resolution;
  high: Resolution;
  standard: Resolution;
  maxres?: Resolution;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface ResourceID {
  kind: string;
  videoId: string;
}

export interface Pagination {
  totalResults: number;
  resultsPerPage: number;
}

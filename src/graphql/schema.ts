import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Circle: any;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
  Rectangle: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  companyCollection?: Maybe<CompanyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type AssetLinkingCollectionsCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type City = Entry & {
  __typename?: 'City';
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Country>;
  linkedFrom?: Maybe<CityLinkingCollections>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityCountryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CityCollection = {
  __typename?: 'CityCollection';
  items: Array<Maybe<City>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CityFilter = {
  AND?: InputMaybe<Array<InputMaybe<CityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CityFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<CfCountryNestedFilter>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_within_circle?: InputMaybe<Scalars['Circle']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CityLinkingCollections = {
  __typename?: 'CityLinkingCollections';
  companyCollection?: Maybe<CompanyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
};


export type CityLinkingCollectionsCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CityLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CityLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CityOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type Company = Entry & {
  __typename?: 'Company';
  city?: Maybe<City>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CompanyLinkingCollections>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyCityArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CompanyCollection = {
  __typename?: 'CompanyCollection';
  items: Array<Maybe<Company>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CompanyFilter = {
  AND?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
  city?: InputMaybe<CfCityNestedFilter>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CompanyLinkingCollections = {
  __typename?: 'CompanyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  titleCollection?: Maybe<TitleCollection>;
};


export type CompanyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CompanyLinkingCollectionsTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CompanyOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type Country = Entry & {
  __typename?: 'Country';
  contentfulMetadata: ContentfulMetadata;
  flag?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CountryLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type CountryFlagArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type CountryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type CountryNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CountryCollection = {
  __typename?: 'CountryCollection';
  items: Array<Maybe<Country>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CountryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CountryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']>;
  flag_contains?: InputMaybe<Scalars['String']>;
  flag_exists?: InputMaybe<Scalars['Boolean']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  flag_not?: InputMaybe<Scalars['String']>;
  flag_not_contains?: InputMaybe<Scalars['String']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CountryLinkingCollections = {
  __typename?: 'CountryLinkingCollections';
  cityCollection?: Maybe<CityCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CountryLinkingCollectionsCityCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CountryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CountryOrder {
  FlagAsc = 'flag_ASC',
  FlagDesc = 'flag_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type Event = Entry & {
  __typename?: 'Event';
  city?: Maybe<City>;
  contentfulMetadata: ContentfulMetadata;
  endingDate?: Maybe<Scalars['DateTime']>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sessionsCollection?: Maybe<EventSessionsCollection>;
  startingDate?: Maybe<Scalars['DateTime']>;
  sys: Sys;
  website?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventCityArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventEndingDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventSessionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventStartingDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  city?: InputMaybe<CfCityNestedFilter>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endingDate?: InputMaybe<Scalars['DateTime']>;
  endingDate_exists?: InputMaybe<Scalars['Boolean']>;
  endingDate_gt?: InputMaybe<Scalars['DateTime']>;
  endingDate_gte?: InputMaybe<Scalars['DateTime']>;
  endingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endingDate_lt?: InputMaybe<Scalars['DateTime']>;
  endingDate_lte?: InputMaybe<Scalars['DateTime']>;
  endingDate_not?: InputMaybe<Scalars['DateTime']>;
  endingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sessions?: InputMaybe<CfSessionNestedFilter>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  startingDate?: InputMaybe<Scalars['DateTime']>;
  startingDate_exists?: InputMaybe<Scalars['Boolean']>;
  startingDate_gt?: InputMaybe<Scalars['DateTime']>;
  startingDate_gte?: InputMaybe<Scalars['DateTime']>;
  startingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startingDate_lt?: InputMaybe<Scalars['DateTime']>;
  startingDate_lte?: InputMaybe<Scalars['DateTime']>;
  startingDate_not?: InputMaybe<Scalars['DateTime']>;
  startingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_exists?: InputMaybe<Scalars['Boolean']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type EventLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EventOrder {
  EndingDateAsc = 'endingDate_ASC',
  EndingDateDesc = 'endingDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartingDateAsc = 'startingDate_ASC',
  StartingDateDesc = 'startingDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type EventSessionsCollection = {
  __typename?: 'EventSessionsCollection';
  items: Array<Maybe<Session>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type Language = Entry & {
  __typename?: 'Language';
  code?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  flag?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LanguageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageFlagArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageLanguageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LanguageCollection = {
  __typename?: 'LanguageCollection';
  items: Array<Maybe<Language>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LanguageFilter = {
  AND?: InputMaybe<Array<InputMaybe<LanguageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LanguageFilter>>>;
  code?: InputMaybe<Scalars['String']>;
  code_contains?: InputMaybe<Scalars['String']>;
  code_exists?: InputMaybe<Scalars['Boolean']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code_not?: InputMaybe<Scalars['String']>;
  code_not_contains?: InputMaybe<Scalars['String']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']>;
  flag_contains?: InputMaybe<Scalars['String']>;
  flag_exists?: InputMaybe<Scalars['Boolean']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  flag_not?: InputMaybe<Scalars['String']>;
  flag_not_contains?: InputMaybe<Scalars['String']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Scalars['String']>;
  language_contains?: InputMaybe<Scalars['String']>;
  language_exists?: InputMaybe<Scalars['Boolean']>;
  language_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language_not?: InputMaybe<Scalars['String']>;
  language_not_contains?: InputMaybe<Scalars['String']>;
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type LanguageLinkingCollections = {
  __typename?: 'LanguageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type LanguageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LanguageLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LanguageOrder {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  FlagAsc = 'flag_ASC',
  FlagDesc = 'flag_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  city?: Maybe<City>;
  cityCollection?: Maybe<CityCollection>;
  company?: Maybe<Company>;
  companyCollection?: Maybe<CompanyCollection>;
  country?: Maybe<Country>;
  countryCollection?: Maybe<CountryCollection>;
  entryCollection?: Maybe<EntryCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  language?: Maybe<Language>;
  languageCollection?: Maybe<LanguageCollection>;
  session?: Maybe<Session>;
  sessionCollection?: Maybe<SessionCollection>;
  talk?: Maybe<Talk>;
  talkCollection?: Maybe<TalkCollection>;
  technology?: Maybe<Technology>;
  technologyCollection?: Maybe<TechnologyCollection>;
  title?: Maybe<Title>;
  titleCollection?: Maybe<TitleCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCityArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCityCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CityOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityFilter>;
};


export type QueryCompanyArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CompanyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyFilter>;
};


export type QueryCountryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCountryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CountryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CountryFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventFilter>;
};


export type QueryLanguageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLanguageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LanguageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LanguageFilter>;
};


export type QuerySessionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SessionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionFilter>;
};


export type QueryTalkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTalkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TalkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalkFilter>;
};


export type QueryTechnologyArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTechnologyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TechnologyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologyFilter>;
};


export type QueryTitleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TitleFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type Session = Entry & {
  __typename?: 'Session';
  audience?: Maybe<Scalars['Int']>;
  contentfulMetadata: ContentfulMetadata;
  event?: Maybe<Event>;
  featured?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Language>;
  linkedFrom?: Maybe<SessionLinkingCollections>;
  online?: Maybe<Scalars['Boolean']>;
  photo?: Maybe<Asset>;
  recording?: Maybe<Scalars['String']>;
  slides?: Maybe<Scalars['String']>;
  sys: Sys;
  talk?: Maybe<Talk>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionAudienceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionEventArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionFeaturedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionLanguageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionOnlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionPhotoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionRecordingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionSlidesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionTalkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SessionCollection = {
  __typename?: 'SessionCollection';
  items: Array<Maybe<Session>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SessionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  audience?: InputMaybe<Scalars['Int']>;
  audience_exists?: InputMaybe<Scalars['Boolean']>;
  audience_gt?: InputMaybe<Scalars['Int']>;
  audience_gte?: InputMaybe<Scalars['Int']>;
  audience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  audience_lt?: InputMaybe<Scalars['Int']>;
  audience_lte?: InputMaybe<Scalars['Int']>;
  audience_not?: InputMaybe<Scalars['Int']>;
  audience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  event?: InputMaybe<CfEventNestedFilter>;
  event_exists?: InputMaybe<Scalars['Boolean']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featured_exists?: InputMaybe<Scalars['Boolean']>;
  featured_not?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<CfLanguageNestedFilter>;
  language_exists?: InputMaybe<Scalars['Boolean']>;
  online?: InputMaybe<Scalars['Boolean']>;
  online_exists?: InputMaybe<Scalars['Boolean']>;
  online_not?: InputMaybe<Scalars['Boolean']>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  recording?: InputMaybe<Scalars['String']>;
  recording_contains?: InputMaybe<Scalars['String']>;
  recording_exists?: InputMaybe<Scalars['Boolean']>;
  recording_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recording_not?: InputMaybe<Scalars['String']>;
  recording_not_contains?: InputMaybe<Scalars['String']>;
  recording_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slides?: InputMaybe<Scalars['String']>;
  slides_contains?: InputMaybe<Scalars['String']>;
  slides_exists?: InputMaybe<Scalars['Boolean']>;
  slides_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slides_not?: InputMaybe<Scalars['String']>;
  slides_not_contains?: InputMaybe<Scalars['String']>;
  slides_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  talk?: InputMaybe<CfTalkNestedFilter>;
  talk_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SessionLinkingCollections = {
  __typename?: 'SessionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
  talkCollection?: Maybe<TalkCollection>;
};


export type SessionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SessionLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SessionLinkingCollectionsTalkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SessionOrder {
  AudienceAsc = 'audience_ASC',
  AudienceDesc = 'audience_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  OnlineAsc = 'online_ASC',
  OnlineDesc = 'online_DESC',
  RecordingAsc = 'recording_ASC',
  RecordingDesc = 'recording_DESC',
  SlidesAsc = 'slides_ASC',
  SlidesDesc = 'slides_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type Talk = Entry & {
  __typename?: 'Talk';
  abstract?: Maybe<TalkAbstract>;
  active?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  lastRelevant?: Maybe<Scalars['DateTime']>;
  linkedFrom?: Maybe<TalkLinkingCollections>;
  sessionsCollection?: Maybe<TalkSessionsCollection>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkAbstractArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkActiveArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkLastRelevantArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkSessionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TalkAbstract = {
  __typename?: 'TalkAbstract';
  json: Scalars['JSON'];
  links: TalkAbstractLinks;
};

export type TalkAbstractAssets = {
  __typename?: 'TalkAbstractAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TalkAbstractEntries = {
  __typename?: 'TalkAbstractEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TalkAbstractLinks = {
  __typename?: 'TalkAbstractLinks';
  assets: TalkAbstractAssets;
  entries: TalkAbstractEntries;
};

export type TalkCollection = {
  __typename?: 'TalkCollection';
  items: Array<Maybe<Talk>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TalkFilter = {
  AND?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  abstract_contains?: InputMaybe<Scalars['String']>;
  abstract_exists?: InputMaybe<Scalars['Boolean']>;
  abstract_not_contains?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_exists?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  lastRelevant?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_exists?: InputMaybe<Scalars['Boolean']>;
  lastRelevant_gt?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_gte?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lastRelevant_lt?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_lte?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_not?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sessions?: InputMaybe<CfSessionNestedFilter>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TalkLinkingCollections = {
  __typename?: 'TalkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type TalkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TalkLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TalkOrder {
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  LastRelevantAsc = 'lastRelevant_ASC',
  LastRelevantDesc = 'lastRelevant_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TalkSessionsCollection = {
  __typename?: 'TalkSessionsCollection';
  items: Array<Maybe<Session>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type Technology = Entry & {
  __typename?: 'Technology';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TechnologyLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type TechnologyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type TechnologySlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type TechnologyTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TechnologyCollection = {
  __typename?: 'TechnologyCollection';
  items: Array<Maybe<Technology>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TechnologyFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TechnologyLinkingCollections = {
  __typename?: 'TechnologyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  titleCollection?: Maybe<TitleCollection>;
};


export type TechnologyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TechnologyLinkingCollectionsTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TechnologyOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type Title = Entry & {
  __typename?: 'Title';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TitleDescription>;
  endingDate?: Maybe<Scalars['DateTime']>;
  linkedFrom?: Maybe<TitleLinkingCollections>;
  organization?: Maybe<Company>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  stackCollection?: Maybe<TitleStackCollection>;
  startingDate?: Maybe<Scalars['DateTime']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleEndingDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleOrganizationArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleRolesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleStackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleStartingDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  items: Array<Maybe<Title>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TitleDescription = {
  __typename?: 'TitleDescription';
  json: Scalars['JSON'];
  links: TitleDescriptionLinks;
};

export type TitleDescriptionAssets = {
  __typename?: 'TitleDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TitleDescriptionEntries = {
  __typename?: 'TitleDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TitleDescriptionLinks = {
  __typename?: 'TitleDescriptionLinks';
  assets: TitleDescriptionAssets;
  entries: TitleDescriptionEntries;
};

export type TitleFilter = {
  AND?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  endingDate?: InputMaybe<Scalars['DateTime']>;
  endingDate_exists?: InputMaybe<Scalars['Boolean']>;
  endingDate_gt?: InputMaybe<Scalars['DateTime']>;
  endingDate_gte?: InputMaybe<Scalars['DateTime']>;
  endingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endingDate_lt?: InputMaybe<Scalars['DateTime']>;
  endingDate_lte?: InputMaybe<Scalars['DateTime']>;
  endingDate_not?: InputMaybe<Scalars['DateTime']>;
  endingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  organization?: InputMaybe<CfCompanyNestedFilter>;
  organization_exists?: InputMaybe<Scalars['Boolean']>;
  roles_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roles_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roles_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roles_exists?: InputMaybe<Scalars['Boolean']>;
  stack?: InputMaybe<CfTechnologyNestedFilter>;
  stackCollection_exists?: InputMaybe<Scalars['Boolean']>;
  startingDate?: InputMaybe<Scalars['DateTime']>;
  startingDate_exists?: InputMaybe<Scalars['Boolean']>;
  startingDate_gt?: InputMaybe<Scalars['DateTime']>;
  startingDate_gte?: InputMaybe<Scalars['DateTime']>;
  startingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startingDate_lt?: InputMaybe<Scalars['DateTime']>;
  startingDate_lte?: InputMaybe<Scalars['DateTime']>;
  startingDate_not?: InputMaybe<Scalars['DateTime']>;
  startingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TitleLinkingCollections = {
  __typename?: 'TitleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TitleOrder {
  EndingDateAsc = 'endingDate_ASC',
  EndingDateDesc = 'endingDate_DESC',
  StartingDateAsc = 'startingDate_ASC',
  StartingDateDesc = 'startingDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TitleStackCollection = {
  __typename?: 'TitleStackCollection';
  items: Array<Maybe<Technology>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CfCityNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCityNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCityNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_within_circle?: InputMaybe<Scalars['Circle']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCompanyNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCompanyNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCompanyNestedFilter>>>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCountryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCountryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCountryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']>;
  flag_contains?: InputMaybe<Scalars['String']>;
  flag_exists?: InputMaybe<Scalars['Boolean']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  flag_not?: InputMaybe<Scalars['String']>;
  flag_not_contains?: InputMaybe<Scalars['String']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfEventNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEventNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEventNestedFilter>>>;
  city_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endingDate?: InputMaybe<Scalars['DateTime']>;
  endingDate_exists?: InputMaybe<Scalars['Boolean']>;
  endingDate_gt?: InputMaybe<Scalars['DateTime']>;
  endingDate_gte?: InputMaybe<Scalars['DateTime']>;
  endingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endingDate_lt?: InputMaybe<Scalars['DateTime']>;
  endingDate_lte?: InputMaybe<Scalars['DateTime']>;
  endingDate_not?: InputMaybe<Scalars['DateTime']>;
  endingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  startingDate?: InputMaybe<Scalars['DateTime']>;
  startingDate_exists?: InputMaybe<Scalars['Boolean']>;
  startingDate_gt?: InputMaybe<Scalars['DateTime']>;
  startingDate_gte?: InputMaybe<Scalars['DateTime']>;
  startingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startingDate_lt?: InputMaybe<Scalars['DateTime']>;
  startingDate_lte?: InputMaybe<Scalars['DateTime']>;
  startingDate_not?: InputMaybe<Scalars['DateTime']>;
  startingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_exists?: InputMaybe<Scalars['Boolean']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfLanguageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLanguageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLanguageNestedFilter>>>;
  code?: InputMaybe<Scalars['String']>;
  code_contains?: InputMaybe<Scalars['String']>;
  code_exists?: InputMaybe<Scalars['Boolean']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code_not?: InputMaybe<Scalars['String']>;
  code_not_contains?: InputMaybe<Scalars['String']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']>;
  flag_contains?: InputMaybe<Scalars['String']>;
  flag_exists?: InputMaybe<Scalars['Boolean']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  flag_not?: InputMaybe<Scalars['String']>;
  flag_not_contains?: InputMaybe<Scalars['String']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Scalars['String']>;
  language_contains?: InputMaybe<Scalars['String']>;
  language_exists?: InputMaybe<Scalars['Boolean']>;
  language_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language_not?: InputMaybe<Scalars['String']>;
  language_not_contains?: InputMaybe<Scalars['String']>;
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSessionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSessionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSessionNestedFilter>>>;
  audience?: InputMaybe<Scalars['Int']>;
  audience_exists?: InputMaybe<Scalars['Boolean']>;
  audience_gt?: InputMaybe<Scalars['Int']>;
  audience_gte?: InputMaybe<Scalars['Int']>;
  audience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  audience_lt?: InputMaybe<Scalars['Int']>;
  audience_lte?: InputMaybe<Scalars['Int']>;
  audience_not?: InputMaybe<Scalars['Int']>;
  audience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  event_exists?: InputMaybe<Scalars['Boolean']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featured_exists?: InputMaybe<Scalars['Boolean']>;
  featured_not?: InputMaybe<Scalars['Boolean']>;
  language_exists?: InputMaybe<Scalars['Boolean']>;
  online?: InputMaybe<Scalars['Boolean']>;
  online_exists?: InputMaybe<Scalars['Boolean']>;
  online_not?: InputMaybe<Scalars['Boolean']>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  recording?: InputMaybe<Scalars['String']>;
  recording_contains?: InputMaybe<Scalars['String']>;
  recording_exists?: InputMaybe<Scalars['Boolean']>;
  recording_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recording_not?: InputMaybe<Scalars['String']>;
  recording_not_contains?: InputMaybe<Scalars['String']>;
  recording_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slides?: InputMaybe<Scalars['String']>;
  slides_contains?: InputMaybe<Scalars['String']>;
  slides_exists?: InputMaybe<Scalars['Boolean']>;
  slides_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slides_not?: InputMaybe<Scalars['String']>;
  slides_not_contains?: InputMaybe<Scalars['String']>;
  slides_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  talk_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTalkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTalkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTalkNestedFilter>>>;
  abstract_contains?: InputMaybe<Scalars['String']>;
  abstract_exists?: InputMaybe<Scalars['Boolean']>;
  abstract_not_contains?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_exists?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  lastRelevant?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_exists?: InputMaybe<Scalars['Boolean']>;
  lastRelevant_gt?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_gte?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lastRelevant_lt?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_lte?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_not?: InputMaybe<Scalars['DateTime']>;
  lastRelevant_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTechnologyNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTechnologyNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTechnologyNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GetActiveTalksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveTalksQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', title?: string | null, slug?: string | null, sessionsCollection?: { __typename?: 'TalkSessionsCollection', items: Array<{ __typename?: 'Session', event?: { __typename?: 'Event', name?: string | null, website?: string | null, city?: { __typename?: 'City', country?: { __typename?: 'Country', flag?: string | null } | null } | null } | null } | null> } | null } | null> } | null };

export type GetAllTalkSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTalkSlugsQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', slug?: string | null } | null> } | null };

export type GetAllTalksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllTalksQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', title?: string | null, category?: string | null, slug?: string | null, abstract?: { __typename?: 'TalkAbstract', json: any } | null, sessionsCollection?: { __typename?: 'TalkSessionsCollection', items: Array<{ __typename?: 'Session', event?: { __typename?: 'Event', name?: string | null, city?: { __typename?: 'City', name?: string | null, country?: { __typename?: 'Country', name?: string | null } | null } | null } | null } | null> } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type GetFeaturedTalksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedTalksQuery = { __typename?: 'Query', sessionCollection?: { __typename?: 'SessionCollection', items: Array<{ __typename?: 'Session', talk?: { __typename?: 'Talk', title?: string | null, slug?: string | null } | null, photo?: { __typename?: 'Asset', url?: string | null } | null, event?: { __typename?: 'Event', name?: string | null } | null } | null> } | null };

export type GetTalkQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetTalkQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', title?: string | null, abstract?: { __typename?: 'TalkAbstract', json: any } | null, sessionsCollection?: { __typename?: 'TalkSessionsCollection', items: Array<{ __typename?: 'Session', online?: boolean | null, slides?: string | null, recording?: string | null, audience?: number | null, sys: { __typename?: 'Sys', id: string }, language?: { __typename?: 'Language', flag?: string | null, language?: string | null } | null, event?: { __typename?: 'Event', name?: string | null, website?: string | null, startingDate?: any | null, endingDate?: any | null, city?: { __typename?: 'City', name?: string | null, country?: { __typename?: 'Country', name?: string | null, flag?: string | null } | null } | null } | null } | null> } | null } | null> } | null };

export type GetTalksStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTalksStatsQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', total: number } | null, eventCollection?: { __typename?: 'EventCollection', total: number } | null, cityCollection?: { __typename?: 'CityCollection', total: number } | null, countryCollection?: { __typename?: 'CountryCollection', total: number } | null };

export type GetUpcomingTalksQueryVariables = Exact<{
  eventStartingDate: Scalars['DateTime'];
}>;


export type GetUpcomingTalksQuery = { __typename?: 'Query', eventCollection?: { __typename?: 'EventCollection', items: Array<{ __typename?: 'Event', name?: string | null, startingDate?: any | null, endingDate?: any | null, city?: { __typename?: 'City', name?: string | null, country?: { __typename?: 'Country', flag?: string | null, name?: string | null } | null } | null, sessionsCollection?: { __typename?: 'EventSessionsCollection', items: Array<{ __typename?: 'Session', talk?: { __typename?: 'Talk', title?: string | null, slug?: string | null } | null } | null> } | null } | null> } | null };


export const GetActiveTalksDocument = gql`
    query GetActiveTalks {
  talkCollection(where: {active: true}, limit: 5) {
    items {
      title
      slug
      sessionsCollection {
        items {
          event {
            name
            website
            city {
              country {
                flag
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetActiveTalksQuery__
 *
 * To run a query within a React component, call `useGetActiveTalksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveTalksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveTalksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveTalksQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveTalksQuery, GetActiveTalksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActiveTalksQuery, GetActiveTalksQueryVariables>(GetActiveTalksDocument, options);
      }
export function useGetActiveTalksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveTalksQuery, GetActiveTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActiveTalksQuery, GetActiveTalksQueryVariables>(GetActiveTalksDocument, options);
        }
export type GetActiveTalksQueryHookResult = ReturnType<typeof useGetActiveTalksQuery>;
export type GetActiveTalksLazyQueryHookResult = ReturnType<typeof useGetActiveTalksLazyQuery>;
export type GetActiveTalksQueryResult = Apollo.QueryResult<GetActiveTalksQuery, GetActiveTalksQueryVariables>;
export const GetAllTalkSlugsDocument = gql`
    query GetAllTalkSlugs {
  talkCollection {
    items {
      slug
    }
  }
}
    `;

/**
 * __useGetAllTalkSlugsQuery__
 *
 * To run a query within a React component, call `useGetAllTalkSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTalkSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTalkSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTalkSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>(GetAllTalkSlugsDocument, options);
      }
export function useGetAllTalkSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>(GetAllTalkSlugsDocument, options);
        }
export type GetAllTalkSlugsQueryHookResult = ReturnType<typeof useGetAllTalkSlugsQuery>;
export type GetAllTalkSlugsLazyQueryHookResult = ReturnType<typeof useGetAllTalkSlugsLazyQuery>;
export type GetAllTalkSlugsQueryResult = Apollo.QueryResult<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>;
export const GetAllTalksDocument = gql`
    query GetAllTalks($limit: Int) {
  talkCollection(order: lastRelevant_DESC, limit: $limit) {
    items {
      title
      category
      abstract {
        json
      }
      slug
      sessionsCollection {
        items {
          event {
            name
            city {
              name
              country {
                name
              }
            }
          }
        }
      }
      contentfulMetadata {
        tags {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllTalksQuery__
 *
 * To run a query within a React component, call `useGetAllTalksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTalksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTalksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetAllTalksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTalksQuery, GetAllTalksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTalksQuery, GetAllTalksQueryVariables>(GetAllTalksDocument, options);
      }
export function useGetAllTalksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTalksQuery, GetAllTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTalksQuery, GetAllTalksQueryVariables>(GetAllTalksDocument, options);
        }
export type GetAllTalksQueryHookResult = ReturnType<typeof useGetAllTalksQuery>;
export type GetAllTalksLazyQueryHookResult = ReturnType<typeof useGetAllTalksLazyQuery>;
export type GetAllTalksQueryResult = Apollo.QueryResult<GetAllTalksQuery, GetAllTalksQueryVariables>;
export const GetFeaturedTalksDocument = gql`
    query GetFeaturedTalks {
  sessionCollection(where: {featured: true}) {
    items {
      talk {
        title
        slug
      }
      photo {
        url
      }
      event {
        name
      }
    }
  }
}
    `;

/**
 * __useGetFeaturedTalksQuery__
 *
 * To run a query within a React component, call `useGetFeaturedTalksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedTalksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedTalksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturedTalksQuery(baseOptions?: Apollo.QueryHookOptions<GetFeaturedTalksQuery, GetFeaturedTalksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeaturedTalksQuery, GetFeaturedTalksQueryVariables>(GetFeaturedTalksDocument, options);
      }
export function useGetFeaturedTalksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeaturedTalksQuery, GetFeaturedTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeaturedTalksQuery, GetFeaturedTalksQueryVariables>(GetFeaturedTalksDocument, options);
        }
export type GetFeaturedTalksQueryHookResult = ReturnType<typeof useGetFeaturedTalksQuery>;
export type GetFeaturedTalksLazyQueryHookResult = ReturnType<typeof useGetFeaturedTalksLazyQuery>;
export type GetFeaturedTalksQueryResult = Apollo.QueryResult<GetFeaturedTalksQuery, GetFeaturedTalksQueryVariables>;
export const GetTalkDocument = gql`
    query GetTalk($slug: String!) {
  talkCollection(where: {slug: $slug}, limit: 1) {
    items {
      title
      abstract {
        json
      }
      sessionsCollection {
        items {
          sys {
            id
          }
          language {
            flag
            language
          }
          online
          slides
          recording
          online
          audience
          event {
            name
            website
            startingDate
            endingDate
            city {
              name
              country {
                name
                flag
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetTalkQuery__
 *
 * To run a query within a React component, call `useGetTalkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTalkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTalkQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetTalkQuery(baseOptions: Apollo.QueryHookOptions<GetTalkQuery, GetTalkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTalkQuery, GetTalkQueryVariables>(GetTalkDocument, options);
      }
export function useGetTalkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTalkQuery, GetTalkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTalkQuery, GetTalkQueryVariables>(GetTalkDocument, options);
        }
export type GetTalkQueryHookResult = ReturnType<typeof useGetTalkQuery>;
export type GetTalkLazyQueryHookResult = ReturnType<typeof useGetTalkLazyQuery>;
export type GetTalkQueryResult = Apollo.QueryResult<GetTalkQuery, GetTalkQueryVariables>;
export const GetTalksStatsDocument = gql`
    query GetTalksStats {
  talkCollection {
    total
  }
  eventCollection {
    total
  }
  cityCollection {
    total
  }
  countryCollection {
    total
  }
}
    `;

/**
 * __useGetTalksStatsQuery__
 *
 * To run a query within a React component, call `useGetTalksStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTalksStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTalksStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTalksStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetTalksStatsQuery, GetTalksStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTalksStatsQuery, GetTalksStatsQueryVariables>(GetTalksStatsDocument, options);
      }
export function useGetTalksStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTalksStatsQuery, GetTalksStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTalksStatsQuery, GetTalksStatsQueryVariables>(GetTalksStatsDocument, options);
        }
export type GetTalksStatsQueryHookResult = ReturnType<typeof useGetTalksStatsQuery>;
export type GetTalksStatsLazyQueryHookResult = ReturnType<typeof useGetTalksStatsLazyQuery>;
export type GetTalksStatsQueryResult = Apollo.QueryResult<GetTalksStatsQuery, GetTalksStatsQueryVariables>;
export const GetUpcomingTalksDocument = gql`
    query GetUpcomingTalks($eventStartingDate: DateTime!) {
  eventCollection(limit: 5, where: {startingDate_gt: $eventStartingDate}) {
    items {
      name
      city {
        name
        country {
          flag
          name
        }
      }
      startingDate
      endingDate
      sessionsCollection {
        items {
          talk {
            title
            slug
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetUpcomingTalksQuery__
 *
 * To run a query within a React component, call `useGetUpcomingTalksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingTalksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingTalksQuery({
 *   variables: {
 *      eventStartingDate: // value for 'eventStartingDate'
 *   },
 * });
 */
export function useGetUpcomingTalksQuery(baseOptions: Apollo.QueryHookOptions<GetUpcomingTalksQuery, GetUpcomingTalksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingTalksQuery, GetUpcomingTalksQueryVariables>(GetUpcomingTalksDocument, options);
      }
export function useGetUpcomingTalksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingTalksQuery, GetUpcomingTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingTalksQuery, GetUpcomingTalksQueryVariables>(GetUpcomingTalksDocument, options);
        }
export type GetUpcomingTalksQueryHookResult = ReturnType<typeof useGetUpcomingTalksQuery>;
export type GetUpcomingTalksLazyQueryHookResult = ReturnType<typeof useGetUpcomingTalksLazyQuery>;
export type GetUpcomingTalksQueryResult = Apollo.QueryResult<GetUpcomingTalksQuery, GetUpcomingTalksQueryVariables>;
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Circle: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
  Rectangle: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  companyCollection?: Maybe<CompanyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type AssetLinkingCollectionsCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityCountryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CountryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/city) */
export type CityNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CityCollection = {
  __typename?: 'CityCollection';
  items: Array<Maybe<City>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CityFilter = {
  AND?: InputMaybe<Array<InputMaybe<CityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CityFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<CfCountryNestedFilter>;
  country_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CityLinkingCollections = {
  __typename?: 'CityLinkingCollections';
  companyCollection?: Maybe<CompanyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
};


export type CityLinkingCollectionsCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CityLinkingCollectionsCompanyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CityLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CityLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CityLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CityLinkingCollectionsCompanyCollectionOrder {
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

export enum CityLinkingCollectionsEventCollectionOrder {
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
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CityFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/company) */
export type CompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyCollection = {
  __typename?: 'CompanyCollection';
  items: Array<Maybe<Company>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CompanyFilter = {
  AND?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
  city?: InputMaybe<CfCityNestedFilter>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CompanyLinkingCollections = {
  __typename?: 'CompanyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  titleCollection?: Maybe<TitleCollection>;
};


export type CompanyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CompanyLinkingCollectionsTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CompanyLinkingCollectionsTitleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CompanyLinkingCollectionsTitleCollectionOrder {
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
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type Country = Entry & {
  __typename?: 'Country';
  contentfulMetadata: ContentfulMetadata;
  flag?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CountryLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type CountryFlagArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type CountryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/country) */
export type CountryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CountryCollection = {
  __typename?: 'CountryCollection';
  items: Array<Maybe<Country>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CountryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CountryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']['input']>;
  flag_contains?: InputMaybe<Scalars['String']['input']>;
  flag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flag_not?: InputMaybe<Scalars['String']['input']>;
  flag_not_contains?: InputMaybe<Scalars['String']['input']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CountryLinkingCollections = {
  __typename?: 'CountryLinkingCollections';
  cityCollection?: Maybe<CityCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CountryLinkingCollectionsCityCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CountryLinkingCollectionsCityCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CountryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CountryLinkingCollectionsCityCollectionOrder {
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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
  endingDate?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sessionsCollection?: Maybe<EventSessionsCollection>;
  startingDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  website?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CityFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventEndingDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventSessionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventSessionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventStartingDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/event) */
export type EventWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  city?: InputMaybe<CfCityNestedFilter>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endingDate?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sessions?: InputMaybe<CfSessionNestedFilter>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startingDate?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EventLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventLinkingCollectionsSessionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EventLinkingCollectionsSessionCollectionOrder {
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventSessionsCollectionOrder {
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
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type Language = Entry & {
  __typename?: 'Language';
  code?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  flag?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LanguageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageFlagArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageLanguageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/language) */
export type LanguageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LanguageCollection = {
  __typename?: 'LanguageCollection';
  items: Array<Maybe<Language>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LanguageFilter = {
  AND?: InputMaybe<Array<InputMaybe<LanguageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LanguageFilter>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_contains?: InputMaybe<Scalars['String']['input']>;
  code_exists?: InputMaybe<Scalars['Boolean']['input']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code_not?: InputMaybe<Scalars['String']['input']>;
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']['input']>;
  flag_contains?: InputMaybe<Scalars['String']['input']>;
  flag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flag_not?: InputMaybe<Scalars['String']['input']>;
  flag_not_contains?: InputMaybe<Scalars['String']['input']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_exists?: InputMaybe<Scalars['Boolean']['input']>;
  language_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_not?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type LanguageLinkingCollections = {
  __typename?: 'LanguageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type LanguageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LanguageLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LanguageLinkingCollectionsSessionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LanguageLinkingCollectionsSessionCollectionOrder {
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
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
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


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCityArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCityCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CityOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityFilter>;
};


export type QueryCompanyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CompanyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyFilter>;
};


export type QueryCountryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CountryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CountryFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventFilter>;
};


export type QueryLanguageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLanguageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LanguageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageFilter>;
};


export type QuerySessionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SessionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionFilter>;
};


export type QueryTalkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTalkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TalkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TalkFilter>;
};


export type QueryTechnologyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTechnologyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TechnologyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyFilter>;
};


export type QueryTitleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TitleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TitleFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type Session = Entry & {
  __typename?: 'Session';
  audience?: Maybe<Scalars['Int']['output']>;
  contentfulMetadata: ContentfulMetadata;
  event?: Maybe<Event>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Language>;
  linkedFrom?: Maybe<SessionLinkingCollections>;
  online?: Maybe<Scalars['Boolean']['output']>;
  photo?: Maybe<Asset>;
  recording?: Maybe<Scalars['String']['output']>;
  slides?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  talk?: Maybe<Talk>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionAudienceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionEventArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionFeaturedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionLanguageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LanguageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionOnlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionPhotoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionRecordingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionSlidesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionTalkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TalkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/session) */
export type SessionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SessionCollection = {
  __typename?: 'SessionCollection';
  items: Array<Maybe<Session>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SessionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  audience?: InputMaybe<Scalars['Int']['input']>;
  audience_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audience_gt?: InputMaybe<Scalars['Int']['input']>;
  audience_gte?: InputMaybe<Scalars['Int']['input']>;
  audience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  audience_lt?: InputMaybe<Scalars['Int']['input']>;
  audience_lte?: InputMaybe<Scalars['Int']['input']>;
  audience_not?: InputMaybe<Scalars['Int']['input']>;
  audience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  event?: InputMaybe<CfEventNestedFilter>;
  event_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featured_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<CfLanguageNestedFilter>;
  language_exists?: InputMaybe<Scalars['Boolean']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  online_exists?: InputMaybe<Scalars['Boolean']['input']>;
  online_not?: InputMaybe<Scalars['Boolean']['input']>;
  photo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recording?: InputMaybe<Scalars['String']['input']>;
  recording_contains?: InputMaybe<Scalars['String']['input']>;
  recording_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recording_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recording_not?: InputMaybe<Scalars['String']['input']>;
  recording_not_contains?: InputMaybe<Scalars['String']['input']>;
  recording_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slides?: InputMaybe<Scalars['String']['input']>;
  slides_contains?: InputMaybe<Scalars['String']['input']>;
  slides_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slides_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slides_not?: InputMaybe<Scalars['String']['input']>;
  slides_not_contains?: InputMaybe<Scalars['String']['input']>;
  slides_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  talk?: InputMaybe<CfTalkNestedFilter>;
  talk_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SessionLinkingCollections = {
  __typename?: 'SessionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
  talkCollection?: Maybe<TalkCollection>;
};


export type SessionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SessionLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SessionLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SessionLinkingCollectionsTalkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SessionLinkingCollectionsTalkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SessionLinkingCollectionsEventCollectionOrder {
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

export enum SessionLinkingCollectionsTalkCollectionOrder {
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
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type Talk = Entry & {
  __typename?: 'Talk';
  abstract?: Maybe<TalkAbstract>;
  active?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  lastRelevant?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<TalkLinkingCollections>;
  sessionsCollection?: Maybe<TalkSessionsCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkAbstractArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkActiveArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkLastRelevantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkSessionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TalkSessionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/talk) */
export type TalkTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TalkAbstract = {
  __typename?: 'TalkAbstract';
  json: Scalars['JSON']['output'];
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
  resources: TalkAbstractResources;
};

export type TalkAbstractResources = {
  __typename?: 'TalkAbstractResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type TalkCollection = {
  __typename?: 'TalkCollection';
  items: Array<Maybe<Talk>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TalkFilter = {
  AND?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  abstract_contains?: InputMaybe<Scalars['String']['input']>;
  abstract_exists?: InputMaybe<Scalars['Boolean']['input']>;
  abstract_not_contains?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_exists?: InputMaybe<Scalars['Boolean']['input']>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  lastRelevant?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastRelevant_gt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_gte?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lastRelevant_lt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_lte?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_not?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sessions?: InputMaybe<CfSessionNestedFilter>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TalkLinkingCollections = {
  __typename?: 'TalkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};


export type TalkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TalkLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TalkLinkingCollectionsSessionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TalkLinkingCollectionsSessionCollectionOrder {
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TalkSessionsCollectionOrder {
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

/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type Technology = Entry & {
  __typename?: 'Technology';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TechnologyLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type TechnologyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type TechnologySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/technology) */
export type TechnologyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologyCollection = {
  __typename?: 'TechnologyCollection';
  items: Array<Maybe<Technology>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TechnologyFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TechnologyLinkingCollections = {
  __typename?: 'TechnologyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  titleCollection?: Maybe<TitleCollection>;
};


export type TechnologyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TechnologyLinkingCollectionsTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TechnologyLinkingCollectionsTitleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TechnologyLinkingCollectionsTitleCollectionOrder {
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
  endingDate?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<TitleLinkingCollections>;
  organization?: Maybe<Company>;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  stackCollection?: Maybe<TitleStackCollection>;
  startingDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleEndingDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleOrganizationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompanyFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleRolesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleStackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TitleStackCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleStartingDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/49ay1wkx3zpm/content_types/title) */
export type TitleTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  items: Array<Maybe<Title>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TitleDescription = {
  __typename?: 'TitleDescription';
  json: Scalars['JSON']['output'];
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
  resources: TitleDescriptionResources;
};

export type TitleDescriptionResources = {
  __typename?: 'TitleDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type TitleFilter = {
  AND?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endingDate?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  organization?: InputMaybe<CfCompanyNestedFilter>;
  organization_exists?: InputMaybe<Scalars['Boolean']['input']>;
  roles_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stack?: InputMaybe<CfTechnologyNestedFilter>;
  stackCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startingDate?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TitleLinkingCollections = {
  __typename?: 'TitleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TitleStackCollectionOrder {
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

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfCityNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCityNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCityNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCompanyNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCompanyNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCompanyNestedFilter>>>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCountryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCountryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCountryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']['input']>;
  flag_contains?: InputMaybe<Scalars['String']['input']>;
  flag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flag_not?: InputMaybe<Scalars['String']['input']>;
  flag_not_contains?: InputMaybe<Scalars['String']['input']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfEventNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEventNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEventNestedFilter>>>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endingDate?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startingDate?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfLanguageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLanguageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLanguageNestedFilter>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_contains?: InputMaybe<Scalars['String']['input']>;
  code_exists?: InputMaybe<Scalars['Boolean']['input']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code_not?: InputMaybe<Scalars['String']['input']>;
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  flag?: InputMaybe<Scalars['String']['input']>;
  flag_contains?: InputMaybe<Scalars['String']['input']>;
  flag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  flag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flag_not?: InputMaybe<Scalars['String']['input']>;
  flag_not_contains?: InputMaybe<Scalars['String']['input']>;
  flag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_exists?: InputMaybe<Scalars['Boolean']['input']>;
  language_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_not?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSessionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSessionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSessionNestedFilter>>>;
  audience?: InputMaybe<Scalars['Int']['input']>;
  audience_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audience_gt?: InputMaybe<Scalars['Int']['input']>;
  audience_gte?: InputMaybe<Scalars['Int']['input']>;
  audience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  audience_lt?: InputMaybe<Scalars['Int']['input']>;
  audience_lte?: InputMaybe<Scalars['Int']['input']>;
  audience_not?: InputMaybe<Scalars['Int']['input']>;
  audience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  event_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featured_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  language_exists?: InputMaybe<Scalars['Boolean']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  online_exists?: InputMaybe<Scalars['Boolean']['input']>;
  online_not?: InputMaybe<Scalars['Boolean']['input']>;
  photo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recording?: InputMaybe<Scalars['String']['input']>;
  recording_contains?: InputMaybe<Scalars['String']['input']>;
  recording_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recording_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recording_not?: InputMaybe<Scalars['String']['input']>;
  recording_not_contains?: InputMaybe<Scalars['String']['input']>;
  recording_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slides?: InputMaybe<Scalars['String']['input']>;
  slides_contains?: InputMaybe<Scalars['String']['input']>;
  slides_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slides_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slides_not?: InputMaybe<Scalars['String']['input']>;
  slides_not_contains?: InputMaybe<Scalars['String']['input']>;
  slides_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  talk_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTalkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTalkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTalkNestedFilter>>>;
  abstract_contains?: InputMaybe<Scalars['String']['input']>;
  abstract_exists?: InputMaybe<Scalars['Boolean']['input']>;
  abstract_not_contains?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_exists?: InputMaybe<Scalars['Boolean']['input']>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  lastRelevant?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastRelevant_gt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_gte?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lastRelevant_lt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_lte?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_not?: InputMaybe<Scalars['DateTime']['input']>;
  lastRelevant_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sessionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTechnologyNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTechnologyNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTechnologyNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetActiveTalksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveTalksQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', title?: string | null, slug?: string | null, sessionsCollection?: { __typename?: 'TalkSessionsCollection', items: Array<{ __typename?: 'Session', event?: { __typename?: 'Event', name?: string | null, website?: string | null, city?: { __typename?: 'City', country?: { __typename?: 'Country', flag?: string | null } | null } | null } | null } | null> } | null } | null> } | null };

export type GetAllSessionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllSessionsQuery = { __typename?: 'Query', sessionCollection?: { __typename?: 'SessionCollection', items: Array<{ __typename?: 'Session', talk?: { __typename?: 'Talk', title?: string | null, slug?: string | null } | null, event?: { __typename?: 'Event', name?: string | null, startingDate?: any | null, endingDate?: any | null, city?: { __typename?: 'City', name?: string | null, country?: { __typename?: 'Country', name?: string | null, flag?: string | null } | null } | null } | null } | null> } | null };

export type GetAllTalkSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTalkSlugsQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', slug?: string | null } | null> } | null };

export type GetAllTalksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllTalksQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', title?: string | null, category?: string | null, slug?: string | null, abstract?: { __typename?: 'TalkAbstract', json: any } | null, sessionsCollection?: { __typename?: 'TalkSessionsCollection', items: Array<{ __typename?: 'Session', event?: { __typename?: 'Event', name?: string | null, endingDate?: any | null, city?: { __typename?: 'City', name?: string | null, country?: { __typename?: 'Country', name?: string | null } | null } | null } | null } | null> } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null };

export type GetFeaturedTalksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedTalksQuery = { __typename?: 'Query', sessionCollection?: { __typename?: 'SessionCollection', items: Array<{ __typename?: 'Session', talk?: { __typename?: 'Talk', title?: string | null, slug?: string | null } | null, photo?: { __typename?: 'Asset', url?: string | null } | null, event?: { __typename?: 'Event', name?: string | null } | null } | null> } | null };

export type GetTalkQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTalkQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', title?: string | null, abstract?: { __typename?: 'TalkAbstract', json: any } | null, sessionsCollection?: { __typename?: 'TalkSessionsCollection', items: Array<{ __typename?: 'Session', online?: boolean | null, slides?: string | null, recording?: string | null, audience?: number | null, sys: { __typename?: 'Sys', id: string }, language?: { __typename?: 'Language', flag?: string | null, language?: string | null } | null, event?: { __typename?: 'Event', name?: string | null, website?: string | null, startingDate?: any | null, endingDate?: any | null, city?: { __typename?: 'City', name?: string | null, country?: { __typename?: 'Country', name?: string | null, flag?: string | null } | null } | null } | null } | null> } | null } | null> } | null };

export type GetTalksForTagQueryVariables = Exact<{
  tag?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTalksForTagQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', items: Array<{ __typename?: 'Talk', title?: string | null, slug?: string | null, sessionsCollection?: { __typename?: 'TalkSessionsCollection', total: number, items: Array<{ __typename?: 'Session', event?: { __typename?: 'Event', endingDate?: any | null } | null } | null> } | null } | null> } | null };

export type GetTalksStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTalksStatsQuery = { __typename?: 'Query', talkCollection?: { __typename?: 'TalkCollection', total: number } | null, eventCollection?: { __typename?: 'EventCollection', total: number } | null, cityCollection?: { __typename?: 'CityCollection', total: number } | null, countryCollection?: { __typename?: 'CountryCollection', total: number } | null };


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
export function useGetActiveTalksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetActiveTalksQuery, GetActiveTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetActiveTalksQuery, GetActiveTalksQueryVariables>(GetActiveTalksDocument, options);
        }
export type GetActiveTalksQueryHookResult = ReturnType<typeof useGetActiveTalksQuery>;
export type GetActiveTalksLazyQueryHookResult = ReturnType<typeof useGetActiveTalksLazyQuery>;
export type GetActiveTalksSuspenseQueryHookResult = ReturnType<typeof useGetActiveTalksSuspenseQuery>;
export type GetActiveTalksQueryResult = Apollo.QueryResult<GetActiveTalksQuery, GetActiveTalksQueryVariables>;
export const GetAllSessionsDocument = gql`
    query GetAllSessions($limit: Int) {
  sessionCollection(limit: $limit) {
    items {
      talk {
        title
        slug
      }
      event {
        name
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
    `;

/**
 * __useGetAllSessionsQuery__
 *
 * To run a query within a React component, call `useGetAllSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSessionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetAllSessionsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSessionsQuery, GetAllSessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSessionsQuery, GetAllSessionsQueryVariables>(GetAllSessionsDocument, options);
      }
export function useGetAllSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSessionsQuery, GetAllSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSessionsQuery, GetAllSessionsQueryVariables>(GetAllSessionsDocument, options);
        }
export function useGetAllSessionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllSessionsQuery, GetAllSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllSessionsQuery, GetAllSessionsQueryVariables>(GetAllSessionsDocument, options);
        }
export type GetAllSessionsQueryHookResult = ReturnType<typeof useGetAllSessionsQuery>;
export type GetAllSessionsLazyQueryHookResult = ReturnType<typeof useGetAllSessionsLazyQuery>;
export type GetAllSessionsSuspenseQueryHookResult = ReturnType<typeof useGetAllSessionsSuspenseQuery>;
export type GetAllSessionsQueryResult = Apollo.QueryResult<GetAllSessionsQuery, GetAllSessionsQueryVariables>;
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
export function useGetAllTalkSlugsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>(GetAllTalkSlugsDocument, options);
        }
export type GetAllTalkSlugsQueryHookResult = ReturnType<typeof useGetAllTalkSlugsQuery>;
export type GetAllTalkSlugsLazyQueryHookResult = ReturnType<typeof useGetAllTalkSlugsLazyQuery>;
export type GetAllTalkSlugsSuspenseQueryHookResult = ReturnType<typeof useGetAllTalkSlugsSuspenseQuery>;
export type GetAllTalkSlugsQueryResult = Apollo.QueryResult<GetAllTalkSlugsQuery, GetAllTalkSlugsQueryVariables>;
export const GetAllTalksDocument = gql`
    query GetAllTalks($limit: Int) {
  talkCollection(limit: $limit) {
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
            endingDate
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
export function useGetAllTalksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTalksQuery, GetAllTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTalksQuery, GetAllTalksQueryVariables>(GetAllTalksDocument, options);
        }
export type GetAllTalksQueryHookResult = ReturnType<typeof useGetAllTalksQuery>;
export type GetAllTalksLazyQueryHookResult = ReturnType<typeof useGetAllTalksLazyQuery>;
export type GetAllTalksSuspenseQueryHookResult = ReturnType<typeof useGetAllTalksSuspenseQuery>;
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
export function useGetFeaturedTalksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFeaturedTalksQuery, GetFeaturedTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeaturedTalksQuery, GetFeaturedTalksQueryVariables>(GetFeaturedTalksDocument, options);
        }
export type GetFeaturedTalksQueryHookResult = ReturnType<typeof useGetFeaturedTalksQuery>;
export type GetFeaturedTalksLazyQueryHookResult = ReturnType<typeof useGetFeaturedTalksLazyQuery>;
export type GetFeaturedTalksSuspenseQueryHookResult = ReturnType<typeof useGetFeaturedTalksSuspenseQuery>;
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
export function useGetTalkSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTalkQuery, GetTalkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTalkQuery, GetTalkQueryVariables>(GetTalkDocument, options);
        }
export type GetTalkQueryHookResult = ReturnType<typeof useGetTalkQuery>;
export type GetTalkLazyQueryHookResult = ReturnType<typeof useGetTalkLazyQuery>;
export type GetTalkSuspenseQueryHookResult = ReturnType<typeof useGetTalkSuspenseQuery>;
export type GetTalkQueryResult = Apollo.QueryResult<GetTalkQuery, GetTalkQueryVariables>;
export const GetTalksForTagDocument = gql`
    query GetTalksForTag($tag: String, $limit: Int) {
  talkCollection(
    where: {contentfulMetadata: {tags: {id_contains_some: [$tag]}}}
    limit: $limit
  ) {
    items {
      title
      slug
      sessionsCollection {
        total
        items {
          event {
            endingDate
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetTalksForTagQuery__
 *
 * To run a query within a React component, call `useGetTalksForTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTalksForTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTalksForTagQuery({
 *   variables: {
 *      tag: // value for 'tag'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTalksForTagQuery(baseOptions?: Apollo.QueryHookOptions<GetTalksForTagQuery, GetTalksForTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTalksForTagQuery, GetTalksForTagQueryVariables>(GetTalksForTagDocument, options);
      }
export function useGetTalksForTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTalksForTagQuery, GetTalksForTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTalksForTagQuery, GetTalksForTagQueryVariables>(GetTalksForTagDocument, options);
        }
export function useGetTalksForTagSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTalksForTagQuery, GetTalksForTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTalksForTagQuery, GetTalksForTagQueryVariables>(GetTalksForTagDocument, options);
        }
export type GetTalksForTagQueryHookResult = ReturnType<typeof useGetTalksForTagQuery>;
export type GetTalksForTagLazyQueryHookResult = ReturnType<typeof useGetTalksForTagLazyQuery>;
export type GetTalksForTagSuspenseQueryHookResult = ReturnType<typeof useGetTalksForTagSuspenseQuery>;
export type GetTalksForTagQueryResult = Apollo.QueryResult<GetTalksForTagQuery, GetTalksForTagQueryVariables>;
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
export function useGetTalksStatsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTalksStatsQuery, GetTalksStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTalksStatsQuery, GetTalksStatsQueryVariables>(GetTalksStatsDocument, options);
        }
export type GetTalksStatsQueryHookResult = ReturnType<typeof useGetTalksStatsQuery>;
export type GetTalksStatsLazyQueryHookResult = ReturnType<typeof useGetTalksStatsLazyQuery>;
export type GetTalksStatsSuspenseQueryHookResult = ReturnType<typeof useGetTalksStatsSuspenseQuery>;
export type GetTalksStatsQueryResult = Apollo.QueryResult<GetTalksStatsQuery, GetTalksStatsQueryVariables>;
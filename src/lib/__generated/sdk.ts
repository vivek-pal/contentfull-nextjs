import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
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
  authorCollection?: Maybe<AuthorCollection>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  featuredProductImageCollection?: Maybe<FeaturedProductImageCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
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


export type AssetLinkingCollectionsFeaturedProductImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPostCollectionArgs = {
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

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/author) */
export type AuthorPictureArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AuthorLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AuthorLinkingCollectionsPostCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
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

export enum AuthorOrder {
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

/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentAuthor) */
export type ComponentAuthor = Entry & {
  __typename?: 'ComponentAuthor';
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentAuthorLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentAuthor) */
export type ComponentAuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentAuthor) */
export type ComponentAuthorInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentAuthor) */
export type ComponentAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentAuthor) */
export type ComponentAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentAuthorCollection = {
  __typename?: 'ComponentAuthorCollection';
  items: Array<Maybe<ComponentAuthor>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentAuthorLinkingCollections = {
  __typename?: 'ComponentAuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type ComponentAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentAuthorLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
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

export enum ComponentAuthorOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
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

/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentRichImage) */
export type ComponentRichImage = Entry & {
  __typename?: 'ComponentRichImage';
  caption?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentRichImageLinkingCollections>;
  sys: Sys;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentRichImage) */
export type ComponentRichImageCaptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentRichImage) */
export type ComponentRichImageFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentRichImage) */
export type ComponentRichImageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentRichImage) */
export type ComponentRichImageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentRichImage) */
export type ComponentRichImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentRichImageCollection = {
  __typename?: 'ComponentRichImageCollection';
  items: Array<Maybe<ComponentRichImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentRichImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  caption?: InputMaybe<Scalars['String']>;
  caption_contains?: InputMaybe<Scalars['String']>;
  caption_exists?: InputMaybe<Scalars['Boolean']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caption_not?: InputMaybe<Scalars['String']>;
  caption_not_contains?: InputMaybe<Scalars['String']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentRichImageLinkingCollections = {
  __typename?: 'ComponentRichImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentRichImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentRichImageOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeo = Entry & {
  __typename?: 'ComponentSeo';
  canonicalUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  follow?: Maybe<Scalars['Boolean']>;
  index?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  noFollow?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoFollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoIndexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  follow?: InputMaybe<Scalars['Boolean']>;
  follow_exists?: InputMaybe<Scalars['Boolean']>;
  follow_not?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['Boolean']>;
  index_exists?: InputMaybe<Scalars['Boolean']>;
  index_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
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

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowTagCloudAsc = 'showTagCloud_ASC',
  ShowTagCloudDesc = 'showTagCloud_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageProductCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  FollowAsc = 'follow_ASC',
  FollowDesc = 'follow_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentTextHighlight) */
export type ComponentTextHighlight = Entry & {
  __typename?: 'ComponentTextHighlight';
  content?: Maybe<ComponentTextHighlightContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentTextHighlightLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  styling?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentTextHighlight) */
export type ComponentTextHighlightContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentTextHighlight) */
export type ComponentTextHighlightLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentTextHighlight) */
export type ComponentTextHighlightNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/componentTextHighlight) */
export type ComponentTextHighlightStylingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentTextHighlightCollection = {
  __typename?: 'ComponentTextHighlightCollection';
  items: Array<Maybe<ComponentTextHighlight>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTextHighlightContent = {
  __typename?: 'ComponentTextHighlightContent';
  json: Scalars['JSON'];
  links: ComponentTextHighlightContentLinks;
};

export type ComponentTextHighlightContentAssets = {
  __typename?: 'ComponentTextHighlightContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTextHighlightContentEntries = {
  __typename?: 'ComponentTextHighlightContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTextHighlightContentLinks = {
  __typename?: 'ComponentTextHighlightContentLinks';
  assets: ComponentTextHighlightContentAssets;
  entries: ComponentTextHighlightContentEntries;
  resources: ComponentTextHighlightContentResources;
};

export type ComponentTextHighlightContentResources = {
  __typename?: 'ComponentTextHighlightContentResources';
  block: Array<ComponentTextHighlightContentResourcesBlock>;
  hyperlink: Array<ComponentTextHighlightContentResourcesHyperlink>;
  inline: Array<ComponentTextHighlightContentResourcesInline>;
};

export type ComponentTextHighlightContentResourcesBlock = ResourceLink & {
  __typename?: 'ComponentTextHighlightContentResourcesBlock';
  sys: ResourceSys;
};

export type ComponentTextHighlightContentResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentTextHighlightContentResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentTextHighlightContentResourcesInline = ResourceLink & {
  __typename?: 'ComponentTextHighlightContentResourcesInline';
  sys: ResourceSys;
};

export type ComponentTextHighlightFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextHighlightFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTextHighlightFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styling?: InputMaybe<Scalars['String']>;
  styling_contains?: InputMaybe<Scalars['String']>;
  styling_exists?: InputMaybe<Scalars['Boolean']>;
  styling_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styling_not?: InputMaybe<Scalars['String']>;
  styling_not_contains?: InputMaybe<Scalars['String']>;
  styling_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentTextHighlightLinkingCollections = {
  __typename?: 'ComponentTextHighlightLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentTextHighlightLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentTextHighlightLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextHighlightLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTextHighlightLinkingCollectionsPageLandingCollectionOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowTagCloudAsc = 'showTagCloud_ASC',
  ShowTagCloudDesc = 'showTagCloud_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentTextHighlightOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StylingAsc = 'styling_ASC',
  StylingDesc = 'styling_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImage = Entry & {
  __typename?: 'FeaturedProductImage';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FeaturedProductImageLinkingCollections>;
  sys: Sys;
  titleCollection?: Maybe<AssetCollection>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImageContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImageHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImageTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImageUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/featuredProductImage) */
export type FeaturedProductImageWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FeaturedProductImageCollection = {
  __typename?: 'FeaturedProductImageCollection';
  items: Array<Maybe<FeaturedProductImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FeaturedProductImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<FeaturedProductImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FeaturedProductImageFilter>>>;
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
  height?: InputMaybe<Scalars['String']>;
  height_contains?: InputMaybe<Scalars['String']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height_not?: InputMaybe<Scalars['String']>;
  height_not_contains?: InputMaybe<Scalars['String']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  titleCollection_exists?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['String']>;
  width_contains?: InputMaybe<Scalars['String']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width_not?: InputMaybe<Scalars['String']>;
  width_not_contains?: InputMaybe<Scalars['String']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FeaturedProductImageLinkingCollections = {
  __typename?: 'FeaturedProductImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FeaturedProductImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FeaturedProductImageOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/footerItemGroup) */
export type FooterItemGroup = Entry & {
  __typename?: 'FooterItemGroup';
  contentfulMetadata: ContentfulMetadata;
  footerItemsCollection?: Maybe<FooterItemGroupFooterItemsCollection>;
  linkedFrom?: Maybe<FooterItemGroupLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/footerItemGroup) */
export type FooterItemGroupFooterItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterItemGroupFooterItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/footerItemGroup) */
export type FooterItemGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/footerItemGroup) */
export type FooterItemGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterItemGroupCollection = {
  __typename?: 'FooterItemGroupCollection';
  items: Array<Maybe<FooterItemGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterItemGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterItemGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterItemGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerItems?: InputMaybe<CfNavItemNestedFilter>;
  footerItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterItemGroupFooterItemsCollection = {
  __typename?: 'FooterItemGroupFooterItemsCollection';
  items: Array<Maybe<NavItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterItemGroupFooterItemsCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
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

export type FooterItemGroupLinkingCollections = {
  __typename?: 'FooterItemGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterItemGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterItemGroupOrder {
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

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItem) */
export type NavItem = Entry & {
  __typename?: 'NavItem';
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavItemLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItem) */
export type NavItemHrefArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItem) */
export type NavItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItem) */
export type NavItemNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavItemCollection = {
  __typename?: 'NavItemCollection';
  items: Array<Maybe<NavItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']>;
  href_contains?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_not?: InputMaybe<Scalars['String']>;
  href_not_contains?: InputMaybe<Scalars['String']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItemGroup) */
export type NavItemGroup = Entry & {
  __typename?: 'NavItemGroup';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavItemGroupLinkingCollections>;
  mainNav?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  navItemsCollection?: Maybe<NavItemGroupNavItemsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItemGroup) */
export type NavItemGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItemGroup) */
export type NavItemGroupMainNavArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItemGroup) */
export type NavItemGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/navItemGroup) */
export type NavItemGroupNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavItemGroupNavItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemFilter>;
};

export type NavItemGroupCollection = {
  __typename?: 'NavItemGroupCollection';
  items: Array<Maybe<NavItemGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavItemGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavItemGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavItemGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mainNav?: InputMaybe<Scalars['String']>;
  mainNav_contains?: InputMaybe<Scalars['String']>;
  mainNav_exists?: InputMaybe<Scalars['Boolean']>;
  mainNav_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainNav_not?: InputMaybe<Scalars['String']>;
  mainNav_not_contains?: InputMaybe<Scalars['String']>;
  mainNav_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navItems?: InputMaybe<CfNavItemNestedFilter>;
  navItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavItemGroupLinkingCollections = {
  __typename?: 'NavItemGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavItemGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavItemGroupNavItemsCollection = {
  __typename?: 'NavItemGroupNavItemsCollection';
  items: Array<Maybe<NavItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavItemGroupNavItemsCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
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

export enum NavItemGroupOrder {
  MainNavAsc = 'mainNav_ASC',
  MainNavDesc = 'mainNav_DESC',
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

export type NavItemLinkingCollections = {
  __typename?: 'NavItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerItemGroupCollection?: Maybe<FooterItemGroupCollection>;
  navItemGroupCollection?: Maybe<NavItemGroupCollection>;
};


export type NavItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavItemLinkingCollectionsFooterItemGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavItemLinkingCollectionsFooterItemGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavItemLinkingCollectionsNavItemGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavItemLinkingCollectionsNavItemGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavItemLinkingCollectionsFooterItemGroupCollectionOrder {
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

export enum NavItemLinkingCollectionsNavItemGroupCollectionOrder {
  MainNavAsc = 'mainNav_ASC',
  MainNavDesc = 'mainNav_DESC',
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

export enum NavItemOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
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

/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPost = Entry & {
  __typename?: 'PageBlogPost';
  author?: Maybe<ComponentAuthor>;
  content?: Maybe<PageBlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageBlogPostLinkingCollections>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  relatedBlogPostsCollection?: Maybe<PageBlogPostRelatedBlogPostsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostRelatedBlogPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostRelatedBlogPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To create individual blog posts [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageBlogPost) */
export type PageBlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageBlogPostCollection = {
  __typename?: 'PageBlogPostCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageBlogPostContent = {
  __typename?: 'PageBlogPostContent';
  json: Scalars['JSON'];
  links: PageBlogPostContentLinks;
};

export type PageBlogPostContentAssets = {
  __typename?: 'PageBlogPostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBlogPostContentEntries = {
  __typename?: 'PageBlogPostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBlogPostContentLinks = {
  __typename?: 'PageBlogPostContentLinks';
  assets: PageBlogPostContentAssets;
  entries: PageBlogPostContentEntries;
  resources: PageBlogPostContentResources;
};

export type PageBlogPostContentResources = {
  __typename?: 'PageBlogPostContentResources';
  block: Array<PageBlogPostContentResourcesBlock>;
  hyperlink: Array<PageBlogPostContentResourcesHyperlink>;
  inline: Array<PageBlogPostContentResourcesInline>;
};

export type PageBlogPostContentResourcesBlock = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesBlock';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesInline = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesInline';
  sys: ResourceSys;
};

export type PageBlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  relatedBlogPosts?: InputMaybe<CfPageBlogPostNestedFilter>;
  relatedBlogPostsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type PageBlogPostLinkingCollections = {
  __typename?: 'PageBlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type PageBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageBlogPostLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageBlogPostLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
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

export enum PageBlogPostLinkingCollectionsPageLandingCollectionOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowTagCloudAsc = 'showTagCloud_ASC',
  ShowTagCloudDesc = 'showTagCloud_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageBlogPostOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
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

export type PageBlogPostRelatedBlogPostsCollection = {
  __typename?: 'PageBlogPostRelatedBlogPostsCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageBlogPostRelatedBlogPostsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
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

/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLanding = Entry & {
  __typename?: 'PageLanding';
  content?: Maybe<PageLandingContent>;
  contentfulMetadata: ContentfulMetadata;
  featuredBlogPost?: Maybe<PageBlogPost>;
  heroBannerHeadline?: Maybe<Scalars['String']>;
  heroBannerHeadlineColor?: Maybe<Scalars['String']>;
  heroBannerImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  logo?: Maybe<Asset>;
  productsCollectionCollection?: Maybe<PageLandingProductsCollectionCollection>;
  seoFields?: Maybe<ComponentSeo>;
  showTagCloud?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  textHighlightCollection?: Maybe<PageLandingTextHighlightCollection>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingFeaturedBlogPostArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingHeroBannerHeadlineColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingProductsCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingProductsCollectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingShowTagCloudArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageLanding) */
export type PageLandingTextHighlightCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingTextHighlightCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTextHighlightFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingContent = {
  __typename?: 'PageLandingContent';
  json: Scalars['JSON'];
  links: PageLandingContentLinks;
};

export type PageLandingContentAssets = {
  __typename?: 'PageLandingContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageLandingContentEntries = {
  __typename?: 'PageLandingContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageLandingContentLinks = {
  __typename?: 'PageLandingContentLinks';
  assets: PageLandingContentAssets;
  entries: PageLandingContentEntries;
  resources: PageLandingContentResources;
};

export type PageLandingContentResources = {
  __typename?: 'PageLandingContentResources';
  block: Array<PageLandingContentResourcesBlock>;
  hyperlink: Array<PageLandingContentResourcesHyperlink>;
  inline: Array<PageLandingContentResourcesInline>;
};

export type PageLandingContentResourcesBlock = ResourceLink & {
  __typename?: 'PageLandingContentResourcesBlock';
  sys: ResourceSys;
};

export type PageLandingContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageLandingContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageLandingContentResourcesInline = ResourceLink & {
  __typename?: 'PageLandingContentResourcesInline';
  sys: ResourceSys;
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredBlogPost?: InputMaybe<CfPageBlogPostNestedFilter>;
  featuredBlogPost_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadlineColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadlineColor_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadlineColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  heroBannerHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerHeadline_not?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_contains?: InputMaybe<Scalars['String']>;
  heroBannerHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroBannerImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  productsCollection?: InputMaybe<CfPageProductNestedFilter>;
  productsCollectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  showTagCloud?: InputMaybe<Scalars['String']>;
  showTagCloud_contains?: InputMaybe<Scalars['String']>;
  showTagCloud_exists?: InputMaybe<Scalars['Boolean']>;
  showTagCloud_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showTagCloud_not?: InputMaybe<Scalars['String']>;
  showTagCloud_not_contains?: InputMaybe<Scalars['String']>;
  showTagCloud_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  textHighlight?: InputMaybe<CfComponentTextHighlightNestedFilter>;
  textHighlightCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLandingOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowTagCloudAsc = 'showTagCloud_ASC',
  ShowTagCloudDesc = 'showTagCloud_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingProductsCollectionCollection = {
  __typename?: 'PageLandingProductsCollectionCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageLandingProductsCollectionCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingTextHighlightCollection = {
  __typename?: 'PageLandingTextHighlightCollection';
  items: Array<Maybe<ComponentTextHighlight>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageLandingTextHighlightCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StylingAsc = 'styling_ASC',
  StylingDesc = 'styling_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProduct = Entry & {
  __typename?: 'PageProduct';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  featuredProductImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageProductLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  productImagesCollectionCollection?: Maybe<AssetCollection>;
  seoFields?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductFeaturedProductImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductProductImagesCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/pageProduct) */
export type PageProductSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageProductCollection = {
  __typename?: 'PageProductCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['String']>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price_not?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productImagesCollectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageProductLinkingCollections = {
  __typename?: 'PageProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type PageProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProductLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageProductLinkingCollectionsPageLandingCollectionOrder {
  HeroBannerHeadlineColorAsc = 'heroBannerHeadlineColor_ASC',
  HeroBannerHeadlineColorDesc = 'heroBannerHeadlineColor_DESC',
  HeroBannerHeadlineAsc = 'heroBannerHeadline_ASC',
  HeroBannerHeadlineDesc = 'heroBannerHeadline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowTagCloudAsc = 'showTagCloud_ASC',
  ShowTagCloudDesc = 'showTagCloud_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type Post = Entry & {
  __typename?: 'Post';
  author?: Maybe<Author>;
  content?: Maybe<PostContent>;
  contentfulMetadata: ContentfulMetadata;
  coverImage?: Maybe<Asset>;
  date?: Maybe<Scalars['DateTime']>;
  excerpt?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PostLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AuthorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostCoverImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostExcerptArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z4jcpsk27kde/content_types/post) */
export type PostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PostContent = {
  __typename?: 'PostContent';
  json: Scalars['JSON'];
  links: PostContentLinks;
};

export type PostContentAssets = {
  __typename?: 'PostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostContentEntries = {
  __typename?: 'PostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostContentLinks = {
  __typename?: 'PostContentLinks';
  assets: PostContentAssets;
  entries: PostContentEntries;
  resources: PostContentResources;
};

export type PostContentResources = {
  __typename?: 'PostContentResources';
  block: Array<PostContentResourcesBlock>;
  hyperlink: Array<PostContentResourcesHyperlink>;
  inline: Array<PostContentResourcesInline>;
};

export type PostContentResourcesBlock = ResourceLink & {
  __typename?: 'PostContentResourcesBlock';
  sys: ResourceSys;
};

export type PostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PostContentResourcesInline = ResourceLink & {
  __typename?: 'PostContentResourcesInline';
  sys: ResourceSys;
};

export type PostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  excerpt?: InputMaybe<Scalars['String']>;
  excerpt_contains?: InputMaybe<Scalars['String']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  excerpt_not?: InputMaybe<Scalars['String']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type PostLinkingCollections = {
  __typename?: 'PostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PostOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
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

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  componentAuthor?: Maybe<ComponentAuthor>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentRichImage?: Maybe<ComponentRichImage>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  componentTextHighlight?: Maybe<ComponentTextHighlight>;
  componentTextHighlightCollection?: Maybe<ComponentTextHighlightCollection>;
  entryCollection?: Maybe<EntryCollection>;
  featuredProductImage?: Maybe<FeaturedProductImage>;
  featuredProductImageCollection?: Maybe<FeaturedProductImageCollection>;
  footerItemGroup?: Maybe<FooterItemGroup>;
  footerItemGroupCollection?: Maybe<FooterItemGroupCollection>;
  navItem?: Maybe<NavItem>;
  navItemCollection?: Maybe<NavItemCollection>;
  navItemGroup?: Maybe<NavItemGroup>;
  navItemGroupCollection?: Maybe<NavItemGroupCollection>;
  pageBlogPost?: Maybe<PageBlogPost>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProduct?: Maybe<PageProduct>;
  pageProductCollection?: Maybe<PageProductCollection>;
  post?: Maybe<Post>;
  postCollection?: Maybe<PostCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
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


export type QueryAuthorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorFilter>;
};


export type QueryComponentAuthorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


export type QueryComponentRichImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentRichImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentRichImageFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryComponentTextHighlightArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTextHighlightCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextHighlightOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTextHighlightFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFeaturedProductImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFeaturedProductImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedProductImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeaturedProductImageFilter>;
};


export type QueryFooterItemGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterItemGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterItemGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterItemGroupFilter>;
};


export type QueryNavItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemFilter>;
};


export type QueryNavItemGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavItemGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavItemGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemGroupFilter>;
};


export type QueryPageBlogPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryPageProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

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

export type _Node = {
  _id: Scalars['ID'];
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  follow?: InputMaybe<Scalars['Boolean']>;
  follow_exists?: InputMaybe<Scalars['Boolean']>;
  follow_not?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['Boolean']>;
  index_exists?: InputMaybe<Scalars['Boolean']>;
  index_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentTextHighlightNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentTextHighlightNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentTextHighlightNestedFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styling?: InputMaybe<Scalars['String']>;
  styling_contains?: InputMaybe<Scalars['String']>;
  styling_exists?: InputMaybe<Scalars['Boolean']>;
  styling_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styling_not?: InputMaybe<Scalars['String']>;
  styling_not_contains?: InputMaybe<Scalars['String']>;
  styling_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNavItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']>;
  href_contains?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_not?: InputMaybe<Scalars['String']>;
  href_not_contains?: InputMaybe<Scalars['String']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageBlogPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  relatedBlogPostsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type CfPageProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['String']>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price_not?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productImagesCollectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PageLandingFieldsFragment = { __typename: 'PageLanding', internalName?: string | null, heroBannerHeadline?: string | null, heroBannerHeadlineColor?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, heroBannerImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, productsCollectionCollection?: { __typename?: 'PageLandingProductsCollectionCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null };

export type PageLandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type PageLandingCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingCollectionQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type BasePageProductFieldsFragment = { __typename: 'PageProduct', internalName?: string | null, slug?: string | null, name?: string | null, description?: string | null, price?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, featuredProductImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type PageProductFieldsFragment = (
  { __typename?: 'PageProduct' }
  & BasePageProductFieldsFragment
);

export type PageProductQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageProductQuery = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null };

export type PageProductCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageProductCollectionQuery = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<{ __typename?: 'PageProduct', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<{ __typename?: 'PageLanding', sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  canonicalUrl
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const BasePageProductFieldsFragmentDoc = gql`
    fragment BasePageProductFields on PageProduct {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  slug
  seoFields {
    ...SeoFields
  }
  name
  description
  price
  featuredProductImage {
    ...ImageFields
  }
}
    `;
export const PageProductFieldsFragmentDoc = gql`
    fragment PageProductFields on PageProduct {
  ...BasePageProductFields
}
    `;
export const PageLandingFieldsFragmentDoc = gql`
    fragment PageLandingFields on PageLanding {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  heroBannerHeadline
  heroBannerHeadlineColor
  heroBannerImage {
    ...ImageFields
  }
  productsCollectionCollection(limit: 6) {
    items {
      ...PageProductFields
    }
  }
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  pageProductCollection(limit: 100, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
  pageLandingCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const PageLandingDocument = gql`
    query pageLanding($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}`;
export const PageLandingCollectionDocument = gql`
    query pageLandingCollection($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}`;
export const PageProductDocument = gql`
    query pageProduct($slug: String!, $locale: String, $preview: Boolean) {
  pageProductCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const PageProductCollectionDocument = gql`
    query pageProductCollection($locale: String, $preview: Boolean) {
  pageProductCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageLanding(variables?: PageLandingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingQuery>(PageLandingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLanding', 'query');
    },
    pageLandingCollection(variables?: PageLandingCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingCollectionQuery>(PageLandingCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLandingCollection', 'query');
    },
    pageProduct(variables: PageProductQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProductQuery>(PageProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageProduct', 'query');
    },
    pageProductCollection(variables?: PageProductCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageProductCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProductCollectionQuery>(PageProductCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageProductCollection', 'query');
    },
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>(SitemapPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
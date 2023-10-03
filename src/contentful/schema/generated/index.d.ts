// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlocksBodyContentFields {
  /** Entry Title */
  entryTitle: string;

  /** Block Layout */
  blockLayout?: Record<string, any> | undefined;

  /** Columns Layout */
  columnsLayout?: Record<string, any> | undefined;

  /** Column 1 Blocks */
  column1Blocks?:
    | (
        | IBodyContent
        | IBodyForm
        | IBodyImages
        | IBodyLinks
        | IBodyYouTube
        | IBodyPostsList
      )[]
    | undefined;

  /** Column 2 Blocks */
  column2Blocks?:
    | (
        | IBodyContent
        | IBodyForm
        | IBodyImages
        | IBodyLinks
        | IBodyYouTube
        | IBodyPostsList
      )[]
    | undefined;

  /** Column 3 Blocks */
  column3Blocks?:
    | (
        | IBodyContent
        | IBodyForm
        | IBodyImages
        | IBodyLinks
        | IBodyYouTube
        | IBodyPostsList
      )[]
    | undefined;
}

/** A collection of all of the `body` content models, along with it's layout style. */

export interface IBlocksBodyContent extends Entry<IBlocksBodyContentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blocksBodyContent";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogAuthorFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Pre Heading Content Blocks */
  preHeadingContentBlocks?: IBlocksBodyContent[] | undefined;

  /** Name */
  name: string;

  /** Avatar */
  avatar?: IBodyImages | undefined;

  /** Avatar Initials */
  avatarInitials: string;

  /** Short Bio */
  shortBio?: Document | undefined;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;
}

/** The author content */

export interface IBlogAuthor extends Entry<IBlogAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogAuthor";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogHomeFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;
}

/** The HOME page Content Model */

export interface IBlogHome extends Entry<IBlogHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogHome";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogPageFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Pre Heading Content Blocks */
  preHeadingContentBlocks?: IBlocksBodyContent[] | undefined;

  /** Heading */
  heading: string;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;
}

/** The main content model for pages. */

export interface IBlogPage extends Entry<IBlogPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogPostFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Published Date */
  publishedDate: string;

  /** Format */
  format: "Standard" | "Aside" | "Image" | "Video" | "Quote" | "Link";

  /** Pre Heading Content Blocks */
  preHeadingContentBlocks?: IBlocksBodyContent[] | undefined;

  /** Heading */
  heading: string;

  /** Featured Banner */
  featuredBanner?: IBodyImages | IBodyYouTube | undefined;

  /** Excerpt Blocks */
  excerptBlocks?: IBlocksBodyContent[] | undefined;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;

  /** Authors */
  authors?: IBlogAuthor[] | undefined;

  /** Series */
  series?: IMetaSeries | undefined;

  /** Categories */
  categories?: IMetaCategory[] | undefined;

  /** Tags */
  tags?: IMetaTag[] | undefined;
}

/** The main content model for posts. */

export interface IBlogPost extends Entry<IBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogPostsListFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Pre Heading Content Blocks */
  preHeadingContentBlocks?: IBlocksBodyContent[] | undefined;

  /** Heading */
  heading?: string | undefined;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;
}

/** The Main Content Model for Posts lists paginated pages. */

export interface IBlogPostsList extends Entry<IBlogPostsListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogPostsList";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBodyContentFields {
  /** Entry Title */
  entryTitle: string;

  /** Name */
  name?: string | undefined;

  /** Body */
  body?: Document | undefined;
}

/** This is the rich text content model. */

export interface IBodyContent extends Entry<IBodyContentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bodyContent";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBodyFormFields {
  /** Entry Title */
  entryTitle: string;

  /** Form Id */
  formId: string;

  /** Name */
  name?: string | undefined;

  /** Max Width */
  maxWidth?: number | undefined;

  /** Form Model */
  formModel: Record<string, any>;

  /** Submit Form Enabled? */
  submitFormEnabled: boolean;

  /** Recaptcha Enabled? */
  recaptchaEnabled: boolean;

  /** Send Email Enabled? */
  sendEmailEnabled: boolean;

  /** Success Message */
  successMessage: string;

  /** Failure Message */
  failureMessage: string;

  /** From Email Key */
  fromEmailKey?: string | undefined;
}

/** This is a form.  For now, it will be a simple JSON file. */

export interface IBodyForm extends Entry<IBodyFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bodyForm";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBodyImagesFields {
  /** Entry Title */
  entryTitle: string;

  /** Name */
  name?: string | undefined;

  /** Max Width */
  maxWidth?: number | undefined;

  /** Max Height */
  maxHeight?: number | undefined;

  /** Align */
  align: "Left" | "Center" | "Right";

  /** Desktop Image */
  desktopImage?: Asset | undefined;

  /** Desktop Alt Text */
  desktopAltText?: string | undefined;

  /** Mobile Image */
  mobileImage?: Asset | undefined;

  /** Mobile Alt Text */
  mobileAltText?: string | undefined;
}

/** This will host all the images, contain the desktop image version, mobile image version, alt text, etc. */

export interface IBodyImages extends Entry<IBodyImagesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bodyImages";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBodyLinksFields {
  /** Entry Title */
  entryTitle: string;

  /** Name */
  name?: string | undefined;

  /** Links */
  links?: Record<string, any> | undefined;
}

/** The navigation links for pages, posts, etc. */

export interface IBodyLinks extends Entry<IBodyLinksFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bodyLinks";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBodyPostsListFields {
  /** Entry Title */
  entryTitle: string;

  /** Name */
  name?: string | undefined;

  /** Posts List Identifier */
  postsListIdentifier: "All" | "Series" | "Category" | "Tag" | "Author";

  /** Limit Per Page */
  limitPerPage: number;

  /** Pagination Location */
  paginationLocation?: ("Above List" | "Below List")[] | undefined;
}

/** The configuration for the posts lists */

export interface IBodyPostsList extends Entry<IBodyPostsListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bodyPostsList";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBodyYouTubeFields {
  /** Entry Title */
  entryTitle: string;

  /** YouTube URL */
  youTubeUrl: string;

  /** Name */
  name?: string | undefined;

  /** Video ID */
  videoId: string;

  /** Description */
  description?: Document | undefined;
}

/** The YouTube Video data model */

export interface IBodyYouTube extends Entry<IBodyYouTubeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bodyYouTube";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMetaCategoryFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Pre Heading Content Blocks */
  preHeadingContentBlocks?: IBlocksBodyContent[] | undefined;

  /** Name */
  name: string;

  /** Parent Meta Category */
  parentMetaCategory?: IMetaCategory | undefined;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;
}

/** The Category of a Blog Post */

export interface IMetaCategory extends Entry<IMetaCategoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "metaCategory";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMetaSeriesFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Pre Heading Content Blocks */
  preHeadingContentBlocks?: IBlocksBodyContent[] | undefined;

  /** Name */
  name: string;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;
}

/** The Series of a Blog Post */

export interface IMetaSeries extends Entry<IMetaSeriesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "metaSeries";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMetaTagFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Pre Heading Content Blocks */
  preHeadingContentBlocks?: IBlocksBodyContent[] | undefined;

  /** Name */
  name: string;

  /** Content Blocks */
  contentBlocks?: IBlocksBodyContent[] | undefined;
}

/** The Tag of a Blog Post */

export interface IMetaTag extends Entry<IMetaTagFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "metaTag";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISiteConfigFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Site Title Template */
  siteTitleTemplate: string;

  /** Site Title Default */
  siteTitleDefault: string;

  /** Site Description */
  siteDescription: string;
}

/** This is the Site Content Config. */

export interface ISiteConfig extends Entry<ISiteConfigFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "siteConfig";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISiteNavbarFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Logo */
  logo?: IBodyImages | undefined;

  /** Links */
  links?: IBodyLinks | undefined;

  /** Open Menu Text */
  openMenuText?: string | undefined;

  /** Close Menu Text */
  closeMenuText?: string | undefined;
}

/** The various navigation bars that we see on the site.  Header navbar, footer navbar, etc. */

export interface ISiteNavbar extends Entry<ISiteNavbarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "siteNavbar";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISiteSearchFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Search Label */
  searchLabel?: string | undefined;

  /** Search Button Text */
  searchButtonText?: string | undefined;
}

/** The search configs and all */

export interface ISiteSearch extends Entry<ISiteSearchFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "siteSearch";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "blocksBodyContent"
  | "blogAuthor"
  | "blogHome"
  | "blogPage"
  | "blogPost"
  | "blogPostsList"
  | "bodyContent"
  | "bodyForm"
  | "bodyImages"
  | "bodyLinks"
  | "bodyPostsList"
  | "bodyYouTube"
  | "metaCategory"
  | "metaSeries"
  | "metaTag"
  | "siteConfig"
  | "siteNavbar"
  | "siteSearch";

export type IEntry =
  | IBlocksBodyContent
  | IBlogAuthor
  | IBlogHome
  | IBlogPage
  | IBlogPost
  | IBlogPostsList
  | IBodyContent
  | IBodyForm
  | IBodyImages
  | IBodyLinks
  | IBodyPostsList
  | IBodyYouTube
  | IMetaCategory
  | IMetaSeries
  | IMetaTag
  | ISiteConfig
  | ISiteNavbar
  | ISiteSearch;

export type LOCALE_CODE = "en-CA";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-CA";

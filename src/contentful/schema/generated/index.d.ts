// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlogNavbarFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;

  /** Logo */
  logo?: IBodyImages | undefined;

  /** Nav Links */
  navLinks: Record<string, any>;

  /** Links */
  links?: IBodyLinks | undefined;
}

/** The various navigation bars that we see on the site.  Header navbar, footer navbar, etc. */

export interface IBlogNavbar extends Entry<IBlogNavbarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogNavbar";
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

  /** Heading */
  heading: string;

  /** Banners */
  banners?: IBodyImages[] | undefined;

  /** Body */
  body?: Document | undefined;

  /** Sidebars */
  sidebars?: IBodySidebar[] | undefined;
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

  /** Publish Status */
  publishStatus: "Draft" | "Published";

  /** Heading */
  heading: string;

  /** Body */
  body?: Document | undefined;

  /** Short Body */
  shortBody?: Document | undefined;

  /** Sidebars */
  sidebars?: IBodySidebar[] | undefined;

  /** Categories */
  categories?: IMetaCategory[] | undefined;
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

export interface IBodyContentFields {
  /** Entry Title */
  entryTitle: string;

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

export interface IBodyImagesFields {
  /** Entry Title */
  entryTitle: string;

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

export interface IBodySidebarFields {
  /** Entry Title */
  entryTitle: string;

  /** Heading */
  heading: string;

  /** Description */
  description?: Document | undefined;

  /** Navigation */
  navigation?: IBlogNavbar | undefined;
}

/** This is the sidebar for a page or post. */

export interface IBodySidebar extends Entry<IBodySidebarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bodySidebar";
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

  /** Open Menu Text */
  openMenuText?: string | undefined;

  /** Close Menu Text */
  closeMenuText?: string | undefined;

  /** Search Label */
  searchLabel?: string | undefined;
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

export type CONTENT_TYPE =
  | "blogNavbar"
  | "blogPage"
  | "blogPost"
  | "bodyContent"
  | "bodyImages"
  | "bodyLinks"
  | "bodySidebar"
  | "siteConfig";

export type IEntry =
  | IBlogNavbar
  | IBlogPage
  | IBlogPost
  | IBodyContent
  | IBodyImages
  | IBodyLinks
  | IBodySidebar
  | ISiteConfig;

export type LOCALE_CODE = "en-CA";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-CA";

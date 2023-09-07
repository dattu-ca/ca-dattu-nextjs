// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

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

  /** Heading */
  heading: string;

  /** Banners */
  banners?: IBodyImages[] | undefined;

  /** Body */
  body?: Document | undefined;

  /** Short Body */
  shortBody?: Document | undefined;

  /** Sidebars */
  sidebars?: IBodySidebar[] | undefined;
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

export interface IBodyFormFields {
  /** Entry Title */
  entryTitle: string;

  /** Form Id */
  formId: string;

  /** Form JSON */
  formJson?: Record<string, any> | undefined;

  /** Send email? */
  sendEmail: boolean;

  /** Success Message */
  successMessage?: string | undefined;

  /** Failure Message */
  failureMessage?: string | undefined;
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
  navigation?: IBodyLinks | undefined;
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
  | "blogPage"
  | "blogPost"
  | "bodyContent"
  | "bodyForm"
  | "bodyImages"
  | "bodyLinks"
  | "bodySidebar"
  | "siteConfig"
  | "siteNavbar"
  | "siteSearch";

export type IEntry =
  | IBlogPage
  | IBlogPost
  | IBodyContent
  | IBodyForm
  | IBodyImages
  | IBodyLinks
  | IBodySidebar
  | ISiteConfig
  | ISiteNavbar
  | ISiteSearch;

export type LOCALE_CODE = "en-CA";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-CA";

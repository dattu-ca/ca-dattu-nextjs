'use server';
import { groq } from "next-sanity";
import { client } from './client';
import { mapSanity as mapBlogPageSanity } from './blogPage.map';



const contentBlocksQuery = `{
  name,
  "slug": slug.current,
  numberOfColumns,
  widths,
  gaps,
  columnSizes,
  contentColumns[] {
    gaps,
    format,
    contentCollection[] -> {
      "type": _type,
      "sysId": _id,
      name,
      'slug': slug.current,
      '': *[_type == 'bodyImages' && _id == ^._id][0]{
        name,
        maxWidth,
        maxHeight,
        align,
        "desktopImage": {
            "caption": desktopImage.caption,
            "alt" : desktopImage.alt,
            "url": desktopImage.asset -> url
        },
        "mobileImage": {
            "caption": mobileImage.caption,
            "alt" : mobileImage.alt,
            "url": mobileImage.asset -> url
        },
      },
      '': *[_type == 'bodyForm' && _id == ^._id][0]{
        formId,
        formModel,
        maxWidth,
        submitFormEnabled,
        recaptchaEnabled,
        sendEmailEnabled,
        successMessage,
        failureMessage,
        fromEmailKey
      },
      '': *[_type == 'bodyContent' && _id == ^._id][0]{
        "raw" : description,
        "description": description[]{
          ...,
          _type == 'image' =>{
            ...,
            asset ->
          }
          
        }
      },
      '': *[_type == 'bodyYouTube' && _id == ^._id][0]{
        videoId,
        url,
        description
      },
      '': *[_type == 'bodyLinks' && _id == ^._id][0]{
        links
      },
      '': *[_type == 'bodyPostsList' && _id == ^._id][0]{
        postsListIdentifier,
        limitPerPage,
        isPaginated
      },
    }
  }
}`

export const fetchBySlug = async (slug: string) => {
  try {
    const response = await client.fetch(
      groq`*[_type=="blogPage" && slug.current == $slug][0]{
        "sysId": _id,
        "slug": slug.current,                
        heading,
        preHeadingContentBlocks[] -> ${contentBlocksQuery},
        contentBlocks[] -> ${contentBlocksQuery},
      }`,
      {
        slug: slug,
        cache: 'no-cache',
        next: {
          revalidate: 0
        }
      }
    )
    return mapBlogPageSanity(response);
  } catch (e) {
    console.error(`Cannot find [siteNavbar] content`, e);
  }


}
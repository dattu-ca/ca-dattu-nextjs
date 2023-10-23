export const contentBlocksQuery = `{
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
        '': *[_type == 'bodyCode' && _id == ^._id][0]{
          code
        },
        '': *[_type == 'bodyMarkdown' && _id == ^._id][0]{
          markdown
        },
        '': *[_type == 'bodyPostsList' && _id == ^._id][0]{
          postsListIdentifier,
          layout,
          limitPerPage,
          isPaginated
        },
      }
    }
  }`
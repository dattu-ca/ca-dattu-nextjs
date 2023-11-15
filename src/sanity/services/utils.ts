const bodyImages = `'': *[_type == 'bodyImages' && _id == ^._id][0]{
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
        }`

const bodyForm = `'': *[_type == 'bodyForm' && _id == ^._id][0]{
          formId,
          formModel,
          maxWidth,
          submitFormEnabled,
          recaptchaEnabled,
          sendEmailEnabled,
          successMessage,
          failureMessage,
          fromEmailKey
        }`

const bodyContent = `'': *[_type == 'bodyContent' && _id == ^._id][0]{
          "raw" : description,
          "description": description[]{
            ...,
            _type == 'image' =>{
              ...,
              asset ->
            }
            
          }
        }`

const bodyYouTube = `'': *[_type == 'bodyYouTube' && _id == ^._id][0]{
          videoId,
          url,
          description
        }`

const bodyLinks = `'': *[_type == 'bodyLinks' && _id == ^._id][0]{
          links
        }`

const bodyCode = `'': *[_type == 'bodyCode' && _id == ^._id][0]{
          code
        }`

const bodyMarkdown = `'': *[_type == 'bodyMarkdown' && _id == ^._id][0]{
          markdown
        }`

const bodyPostsList = `'': *[_type == 'bodyPostsList' && _id == ^._id][0]{
          layout,
          postsList[] ->{
            heading,
            "type": _type,
            "slug": slug.current,
            "sysId": _id,
            "datePublished": dateTime(datePublished + 'T00:00:00Z'),
          }
        }`

const contentBlock = `'': *[_type == 'contactBlock' && _id == ^._id][0]{
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
                ${bodyImages},
                ${bodyForm},
                ${bodyContent},
                ${bodyYouTube},
                ${bodyLinks},
                ${bodyCode},
                ${bodyMarkdown},
                ${bodyPostsList},
              }
            }
        } `


export const preHeadingContentBlocksQuery = `{
    name,
    "type": _type,
    "slug": slug.current,
    "sysId": _id,
    ${bodyImages},
    ${bodyForm},
    ${bodyContent},
    ${bodyYouTube},
    ${bodyLinks},
    ${bodyCode},
    ${bodyMarkdown},
    ${bodyPostsList},
    ${contentBlock},
  }`

export const excerptBlocksQuery = `{
    name,
    "type": _type,
    "slug": slug.current,
    "sysId": _id,
    ${bodyImages},
    ${bodyForm},
    ${bodyContent},
    ${bodyYouTube},
    ${bodyLinks},
    ${bodyCode},
    ${bodyMarkdown},
    ${bodyPostsList},
    ${contentBlock},
  }`

export const contentBlocksQuery = `{
    name,
    "type": _type,
    "slug": slug.current,
    "sysId": _id,
    ${bodyImages},
    ${bodyForm},
    ${bodyContent},
    ${bodyYouTube},
    ${bodyLinks},
    ${bodyCode},
    ${bodyMarkdown},
    ${bodyPostsList},
    ${contentBlock},
  }`
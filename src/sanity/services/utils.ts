const bodyImages = `'': *[_type == 'bodyImages' && _id == ^._id][0]{
          displayName,
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
          linkUrl,
          linkTarget,
        }`

const bodyYouTube = `'': *[_type == 'bodyYouTube' && _id == ^._id][0]{
          videoId,
          url,
          description
        }`

export const preHeadingExcerptBlocksQuery = `{
    displayName,
    "type": _type,
    "slug": slug.current,
    "sysId": _id,
    ${bodyImages},
    ${bodyYouTube},
  }`

export const preHeadingContentBlocksQuery = `{
    displayName,
    "type": _type,
    "slug": slug.current,
    "sysId": _id,
    ${bodyImages},
    ${bodyYouTube},
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

const bodyCode = `'': *[_type == 'bodyCode' && _id == ^._id][0]{
          code
        }`

const bodyMarkdown = `'': *[_type == 'bodyMarkdown' && _id == ^._id][0]{
          markdown
        }`

export const excerptBlocksQuery = `{
    displayName,
    "type": _type,
    "slug": slug.current,
    "sysId": _id,
    ${bodyImages},
    ${bodyYouTube},
    ${bodyContent},
    ${bodyCode},
    ${bodyMarkdown},
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

const bodyLinks = `'': *[_type == 'bodyLinks' && _id == ^._id][0]{
          links
        }`

const bodyPostsList = `'': *[_type == 'bodyPostsList' && _id == ^._id][0]{
          layout,
          showName,
          postsList[] ->{
            displayName,
            "type": _type,
            "slug": slug.current,
            "sysId": _id,
            "datePublished": dateTime(datePublished + 'T00:00:00Z'),
            preHeadingExcerptBlocks[] -> ${preHeadingExcerptBlocksQuery},
            excerptBlocks[] -> ${excerptBlocksQuery},
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
                displayName,
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


export const contentBlocksQuery = `{
    displayName,
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
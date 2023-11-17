import {defineField, defineType} from 'sanity';
import {HiClipboardDocument} from "react-icons/hi2";
import {contentBlockSchema} from "../blocks/block.schema";
import {bodyContentSchema} from "../bodyContent/bodyContent.schema";
import {bodyMarkdownSchema} from "../bodyContent/bodyMarkdown.schema";
import {bodyYouTubeSchema} from "../bodyContent/bodyYouTube.schema";
import {bodyImagesSchema} from "../bodyContent/bodyImages.schema";
import {bodyLinksSchema} from "../bodyContent/bodyLinks.schema";
import {bodyFormSchema} from "../bodyContent/bodyForm.schema";
import {bodyPostsListSchema} from "../bodyContent/bodyPostsList.schema";
import {bodyCodeSchema} from "../bodyContent/bodyCode.schema";

const allPostsSchema = defineType({
    name: 'allPosts',
    title: 'All Posts',
    type: 'document',
    icon: HiClipboardDocument,
    fields: [
        defineField({
            name: 'preHeadingContentBlocks',
            title: 'Pre Heading Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: bodyImagesSchema.name},
                        {type: bodyYouTubeSchema.name},
                    ]
                }
            ]
        }),
        defineField({
            name: 'displayHeading',
            title: 'Display Heading',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'contentBlocks',
            title: 'Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: bodyContentSchema.name},
                        {type: bodyMarkdownSchema.name},
                        {type: bodyYouTubeSchema.name},
                        {type: bodyImagesSchema.name},
                        {type: bodyLinksSchema.name},
                        {type: bodyFormSchema.name},
                        {type: bodyPostsListSchema.name},
                        {type: bodyCodeSchema.name},
                        {type: contentBlockSchema.name},
                    ]
                }
            ]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'All Posts View',
                description: 'The [Articles] link'
            }
        },
    },
});

export {
    allPostsSchema
}
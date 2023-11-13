import { defineField, defineType} from 'sanity';
import {MdFolder} from "react-icons/md";
// import {contentBlockSchema} from "../blocks/block.schema";
import {bodyContentSchema} from "../bodyContent/bodyContent.schema";
import {bodyMarkdownSchema} from "../bodyContent/bodyMarkdown.schema";
import {bodyYouTubeSchema} from "../bodyContent/bodyYouTube.schema";
import {bodyImagesSchema} from "../bodyContent/bodyImages.schema";
import {bodyLinksSchema} from "../bodyContent/bodyLinks.schema";
import {bodyFormSchema} from "../bodyContent/bodyForm.schema";
import {bodyPostsListSchema} from "../bodyContent/bodyPostsList.schema";
import {bodyCodeSchema} from "../bodyContent/bodyCode.schema";

const categorySchema = defineType({
    name: 'category',
    title: 'Categories',
    type: 'document',
    icon: MdFolder,
    fields: [
        defineField({
            name: 'entryTitle',
            title: 'Entry Title',
            description: 'This is only used for slug creation and display in CMS',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'entryTitle',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'preHeadingContentBlocks',
            title: 'Pre Heading Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: bodyYouTubeSchema.name},
                        {type: bodyImagesSchema.name},
                    ]
                }
            ]
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'parentCategory',
            title: 'Parent - Category',
            type: 'reference',
            to: [{type: 'category'}],
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
                        // { type: contentBlockSchema.name },
                    ]
                }
            ]
        }),
    ]
});

export {
    categorySchema
}
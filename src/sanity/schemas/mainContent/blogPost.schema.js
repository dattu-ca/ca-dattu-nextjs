import {defineField, defineType} from 'sanity';
import {FaScroll} from "react-icons/fa6";
import {contentBlockSchema} from "../blocks/block.schema";
import {categorySchema} from "../metas/category.schema";
import {tagSchema} from "../metas/tag.schema";
import {authorSchema} from "../metas/author.schema";
import {seriesSchema} from "../metas/series.schema";
import {bodyContentSchema} from "../bodyContent/bodyContent.schema";
import {bodyMarkdownSchema} from "../bodyContent/bodyMarkdown.schema";
import {bodyYouTubeSchema} from "../bodyContent/bodyYouTube.schema";
import {bodyImagesSchema} from "../bodyContent/bodyImages.schema";
import {bodyLinksSchema} from "../bodyContent/bodyLinks.schema";
import {bodyFormSchema} from "../bodyContent/bodyForm.schema";
import {bodyPostsListSchema} from "../bodyContent/bodyPostsList.schema";
import {bodyCodeSchema} from "../bodyContent/bodyCode.schema";

const blogPostSchema = defineType({
    name: 'blogPost',
    title: 'Post',
    type: 'document',
    icon: FaScroll,
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
            name: 'datePublished',
            title: 'Date Published',
            type: 'date',
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            initialValue: 'Standard',
            options: {
                list: [
                    {title: 'Standard', value: 'Standard'},
                    {title: 'Aside', value: 'Aside'},
                    {title: 'Image', value: 'Image'},
                    {title: 'Video', value: 'Video'},
                    {title: 'Quote', value: 'Quote'},
                    {title: 'Link', value: 'Link'},
                ]
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishStatus',
            title: 'Publish Status',
            type: 'string',
            initialValue: 'Draft',
            options: {
                list: [
                    {title: 'Draft', value: 'Draft'},
                    {title: 'Published', value: 'Published'},
                ]
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
            name: 'preHeadingExcerptBlocks',
            title: 'Pre Heading Excerpt Blocks',
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
            name: 'heading',
            title: 'Heading',
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
        defineField({
            name: 'excerptBlocks',
            title: 'Excerpt Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: bodyContentSchema.name},
                        {type: bodyMarkdownSchema.name},
                        {type: bodyYouTubeSchema.name},
                        {type: bodyImagesSchema.name},
                        {type: bodyCodeSchema.name},
                    ]
                }
            ]
        }),
        defineField({
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: authorSchema.name}]
                }
            ]
        }),
        defineField({
            name: 'series',
            title: 'Series',
            type: 'reference',
            to: [{type: seriesSchema.name}]
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: categorySchema.name}]
                }
            ]
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: tagSchema.name}]
                }
            ]
        }),
    ]
});

export {
    blogPostSchema
}
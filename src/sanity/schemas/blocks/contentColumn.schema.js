import {defineField, defineType} from 'sanity'
import {columnGapsSchema} from "./columnGaps.schema";
import {bodyContentSchema} from "../bodyContent/bodyContent.schema";
import {bodyYouTubeSchema} from "../bodyContent/bodyYouTube.schema";
import {bodyImagesSchema} from '../bodyContent/bodyImages.schema';
import {bodyLinksSchema} from '../bodyContent/bodyLinks.schema';
import {bodyFormSchema} from '../bodyContent/bodyForm.schema';
import {bodyPostsListSchema} from '../bodyContent/bodyPostsList.schema';

const contentColumnSchema = defineType({
    name: 'contentColumn',
    title: 'The column of content',
    description: '',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'gaps',
            title: 'Gaps',
            type: columnGapsSchema.name,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'format',
            title: 'Format of the content in the column',
            type: 'string',
            initialValue: 'Stacked',
            options: {
                list: [
                    {title: 'Adjacent', value: 'Adjacent'},
                    {title: 'Slider', value: 'Slider'},
                    {title: 'Stacked', value: 'Stacked'},
                    {title: 'Tabbed', value: 'Tabbed'},
                ]
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'contentCollection',
            title: 'Collection of [BODY] content',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: bodyContentSchema.name},
                        {type: bodyYouTubeSchema.name},
                        {type: bodyImagesSchema.name},
                        {type: bodyLinksSchema.name},
                        {type: bodyFormSchema.name},
                        {type: bodyPostsListSchema.name},
                    ]
                },
            ]
        })
    ]
});

export {
    contentColumnSchema
};

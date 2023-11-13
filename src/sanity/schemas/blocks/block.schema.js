import {defineField, defineType} from 'sanity';
import {FaCubes} from "react-icons/fa6";
import {blockWidthSchema} from "./blockWidth.schema";
import {blockGapsSchema} from "./blockGaps.schema";
import {columnSizesSchema} from "./columnSizes.schema";
import {contentColumnSchema} from "../blocks/contentColumn.schema";


const contentBlockSchema = defineType({
    name: 'contentBlock',
    title: 'Blocks of Content with different Layouts',
    description: 'The main blocks of content, each one will contain columns',
    type: 'document',
    icon: FaCubes,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'numberOfColumns',
            title: 'Number of Columns',
            type: 'number',
            initialValue: 3,
            validation: (rule) => rule.required().min(1).max(3),
        }),
        defineField({
            name: 'widths',
            title: 'Width for the block per viewport',
            type: blockWidthSchema.name,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'gaps',
            title: 'Gaps between columns per viewport',
            type: blockGapsSchema.name,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'columnSizes',
            title: 'Column Sizes',
            type: columnSizesSchema.name,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'contentColumns',
            title: 'Content Columns',
            type: 'array',
            of: [
                {type: contentColumnSchema.name}
            ]
        })
    ]
});

export {
    contentBlockSchema
};

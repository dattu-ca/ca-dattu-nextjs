import {defineArrayMember, defineField, defineType} from 'sanity';
import {BsCollection} from "react-icons/bs";

const seriesSchema = defineType({
    name: 'series',
    title: 'Series',
    description: 'The series with which a list of posts belong to.',
    type: 'document',
    icon: BsCollection,
    fields: [
        defineField({
            name: 'entryTitle',
            title: 'Entry Title',
            description: 'This is only used for slug creation and display in CMS',
            type: 'string',
            validation: (rule) => rule.required(),
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
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    seriesSchema
}
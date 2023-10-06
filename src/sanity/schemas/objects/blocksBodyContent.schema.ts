import {defineArrayMember, defineField, defineType} from 'sanity'

const blocksBodyContentSchema = defineType({
    name: 'blocksBodyContent',
    title: 'Blocks of Content',
    type: 'object',
    fields: [
        defineField({
            name: 'entryTitle',
            title: 'Entry Title',
            description: 'This is only used for slug creation and display in CMS',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'columnBlocks',
            title: 'Column Blocks',
            description: '',
            type: 'string',
        }),
        
    ]
});

export {
    blocksBodyContentSchema
};

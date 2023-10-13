import { defineArrayMember, defineField, defineType } from 'sanity';

const blockFieldSchema = defineField({
    name: 'description',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
                { title: 'H6', value: 'h6' },
                { title: 'Quote', value: 'blockquote' }
            ]
        }),
        defineArrayMember({ type: 'image' }),
        defineArrayMember({ type: 'code' })
    ],
    validation: (rule) => rule.required(),
});

export {
    blockFieldSchema
};

import {defineField, defineType} from 'sanity';
import {ImageIcon} from '@sanity/icons'

const bodyImagesSchema = defineType({
    name: 'bodyImages',
    title: 'Body - Images',
    type: 'document',
    icon: ImageIcon,
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
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'maxWidth',
            title: 'Max Width',
            description: 'maximum width in pixels',
            type: 'number',
            validation: (rule) => rule.min(0),
        }),
        defineField({
            name: 'maxHeight',
            title: 'Max Height',
            description: 'maximum height in pixels',
            type: 'number',
            validation: (rule) => rule.min(0),
        }),
        defineField({
            name: 'align',
            title: 'Image Alignment',
            type: 'string',
            initialValue: 'center',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'},
                ]
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'border',
            title: 'Add border?',
            type: 'boolean',
            initialValue: false,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'shadow',
            title: 'Add Shadow?',
            type: 'boolean',
            initialValue: false,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'shape',
            title: 'Add Shape?',
            description: 'tailwind shape classes',
            type: 'string',
            initialValue: '',
        }),
        defineField({
            type: 'image',
            icon: ImageIcon,
            name: 'desktopImage',
            title: 'Desktop Image',
            options: {
                hotspot: true,
            },
            preview: {
                select: {
                    imageUrl: 'asset.url',
                    title: 'caption',
                },
            },
            fields: [
                defineField({
                    title: 'Caption',
                    name: 'caption',
                    type: 'string',
                }),
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt text',
                    description:
                        'Alternative text for screenreaders. Falls back on caption if not set',
                }),
            ],
        }),
        defineField({
            type: 'image',
            icon: ImageIcon,
            name: 'mobileImage',
            title: 'Mobile Image',
            options: {
                hotspot: true,
            },
            preview: {
                select: {
                    imageUrl: 'asset.url',
                    title: 'caption',
                },
            },
            fields: [
                defineField({
                    title: 'Caption',
                    name: 'caption',
                    type: 'string',
                }),
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt text',
                    description:
                        'Alternative text for screenreaders. Falls back on caption if not set',
                }),
            ],
        }),

    ]
});

export {
    bodyImagesSchema
};

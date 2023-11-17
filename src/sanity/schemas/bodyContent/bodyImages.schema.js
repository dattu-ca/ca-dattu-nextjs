import {defineField, defineType} from 'sanity';
import {ImageIcon} from '@sanity/icons'

const bodyImagesSchema = defineType({
    name: 'bodyImages',
    title: 'Body - Images',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'This is only used for slug creation and display in CMS',
            validation: (rule) => rule.required(),
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
            name: 'displayName',
            title: 'Display Name',
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
                        'Alternative text for screenreaders.',
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
                        'Alternative text for screenreaders.',
                }),
            ],
        }),
        defineField({
            name: 'linkUrl',
            title: 'Link URL',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
                allowRelative: true
            })
        }),
        defineField({
            name: 'linkTarget',
            title: 'Open Link in New Tab?',
            type: 'boolean',
            initialValue: false,
        }),
    ]
});

export {
    bodyImagesSchema
};

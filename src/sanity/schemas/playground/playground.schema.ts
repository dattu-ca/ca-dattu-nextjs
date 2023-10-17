import { defineField, defineType } from 'sanity';
import { SiSparkfun } from 'react-icons/si';

const playgroundSchema = defineType({
    name: 'playground',
    title: 'Playground',
    type: 'document',
    icon: SiSparkfun,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'sizeChart',
            title: 'Size Chart',
            type: 'table',
        }),
        defineField({
            name: 'myIcon',
            title: 'My Icon',
            type: 'icon',
        }),
        defineField({
            type: 'markdown',
            name: 'markdown',
            title: 'Markdown',
        }),

        defineField({
            type: 'image',
            name: 'Image',
            title: 'Image',
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
    playgroundSchema
};

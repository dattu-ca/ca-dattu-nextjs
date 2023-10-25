import { defineField, defineType} from 'sanity';
import {FaUserEdit} from "react-icons/fa";

const authorSchema = defineType({
    name: 'author',
    title: 'Authors',
    type: 'document',
    icon: FaUserEdit,
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
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'avatarInitials',
            title: 'Avatar Initials',
            description: 'If the image is not found, then this is displayed in the avatar.',
            type: 'string',
            validation: (rule) => rule.custom((initials, context) => {
                const avatar = context.document['avatarImage'];
                if (!avatar && !initials) {
                    return 'Avatar initials are required if the Avatar Image is not provided';
                }
                return true;
            }),
        }),
        defineField({
            name: 'avatarImage',
            title: 'Avatar ',
            type: 'image',
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
    authorSchema
}
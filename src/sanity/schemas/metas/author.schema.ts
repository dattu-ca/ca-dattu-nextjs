import {defineArrayMember, defineField, defineType} from 'sanity';
import {FaUserEdit} from "react-icons/fa";
import {blocksBodyContentSchema} from "../objects/blocksBodyContent.schema";

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
            name: 'preHeadingContentBlocks',
            title: 'Pre Heading Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: blocksBodyContentSchema.name}
                    ]
                }
            ]
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
        }),
        defineField({
            name: 'contentBlocks',
            title: 'Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: blocksBodyContentSchema.name}
                    ]
                }
            ]
        }),
    ]
});

export {
    authorSchema
}
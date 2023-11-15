import { defineField, defineType} from 'sanity';
import {FaUserEdit} from "react-icons/fa";
import {bodyContentSchema} from "../bodyContent/bodyContent.schema";
import {bodyMarkdownSchema} from "../bodyContent/bodyMarkdown.schema";
import {bodyYouTubeSchema} from "../bodyContent/bodyYouTube.schema";
import {bodyImagesSchema} from "../bodyContent/bodyImages.schema";
import {bodyLinksSchema} from "../bodyContent/bodyLinks.schema";
import {bodyFormSchema} from "../bodyContent/bodyForm.schema";
import {bodyPostsListSchema} from "../bodyContent/bodyPostsList.schema";
import {bodyCodeSchema} from "../bodyContent/bodyCode.schema";

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
                        'Alternative text for screenreaders.',
                }),
            ],
        }),
        defineField({
            name: 'preHeadingContentBlocks',
            title: 'Pre Heading Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: bodyYouTubeSchema.name},
                        {type: bodyImagesSchema.name},
                    ]
                }
            ]
        }),
        defineField({
            name: 'contentBlocks',
            title: 'Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: bodyContentSchema.name},
                        {type: bodyMarkdownSchema.name},
                        {type: bodyYouTubeSchema.name},
                        {type: bodyImagesSchema.name},
                        {type: bodyLinksSchema.name},
                        {type: bodyFormSchema.name},
                        {type: bodyPostsListSchema.name},
                        {type: bodyCodeSchema.name},
                    ]
                }
            ]
        }),
    ]
});

export {
    authorSchema
}
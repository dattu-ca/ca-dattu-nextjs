import { defineField, defineType } from 'sanity';
import { HiClipboardDocument } from "react-icons/hi2";
import { contentBlockSchema } from "../blocks/block.schema";

const allPostsSchema = defineType({
    name: 'allPosts',
    title: 'All Posts',
    type: 'document',
    icon: HiClipboardDocument,
    fields: [
        defineField({
            name: 'preHeadingContentBlocks',
            title: 'Pre Heading Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: contentBlockSchema.name },
                    ]
                }
            ]
        }),
        defineField({
            name: 'heading',
            title: 'Page Heading',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'contentBlocks',
            title: 'Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: contentBlockSchema.name },
                    ]
                }
            ]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'All Posts View',
                description: 'The [Articles] link'
            }
        },
    },
});

export {
    allPostsSchema
}
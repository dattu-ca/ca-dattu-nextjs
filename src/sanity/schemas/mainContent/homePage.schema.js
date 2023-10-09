import {defineField, defineType} from 'sanity';
import {FaHome} from "react-icons/fa";
import {contentBlockSchema} from "../blocks/block.schema";

const homePageSchema = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: FaHome,
    fields: [
        defineField({
            name: 'preHeadingContentBlocks',
            title: 'Pre Heading Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: contentBlockSchema.name},
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
            name: 'contentBlock',
            title: 'Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: contentBlockSchema.name},
                    ]
                }
            ]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Home Page',
            }
        },
    },
});

export {
    homePageSchema
}
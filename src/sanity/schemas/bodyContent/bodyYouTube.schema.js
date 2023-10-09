import {defineArrayMember, defineField, defineType} from 'sanity';
import { FaYoutube } from 'react-icons/fa6';
import {BodyYouTubeVideoIDControl} from "./controls/bodyYouTubeVideoID.control";

const bodyYouTubeSchema = defineType({
    name: 'bodyYouTube',
    title: 'Body - YouTube',
    type: 'document',
    icon: FaYoutube,
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
                source: 'name',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'videoId',
            title: 'Video ID',
            type: 'string',
            validation: (rule) => rule.required(),
            components:{
                input: BodyYouTubeVideoIDControl
            },
        }),
        defineField({
            name: 'url',
            title: 'YouTube URL',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'array',
            of: [defineArrayMember({type: 'block'})],
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyYouTubeSchema
};

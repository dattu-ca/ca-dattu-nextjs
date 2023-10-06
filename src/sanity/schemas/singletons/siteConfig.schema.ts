import {defineField, defineType} from 'sanity'
import {FaGear} from "react-icons/fa6";

const siteConfigSchema = defineType({
    name: 'siteConfig',
    title: 'Site Config',
    type: 'document',
    icon: FaGear,
    fields: [
        defineField({
            name: 'siteTitleTemplate',
            title: 'Site Title Template',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'siteTitleDefault',
            title: 'Site Title Default',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'numberOfPostsPerPage',
            title: 'Posts per page',
            description: 'Default maximum number of posts per page.',
            type: 'number',
            initialValue: 10,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'paginationMaxLinks',
            title: 'Pagination Maximum Links',
            description: 'Default maximum number of page links in the pagination component.',
            type: 'number',
            initialValue: 9,
            validation: (rule) => rule.custom(num => {
                if(!(num > 0 && num % 2 !== 0 && num <= 9)){
                    return 'Number should be an odd number between 1 and 9'
                }
                return true;
            }),
        }),
        //NEXT_PUBLIC_DEFAULT_PAGINATION_MAX_LINKS
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Config',
            }
        },
    },
});

export {
    siteConfigSchema
};
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
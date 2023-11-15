import {defineField, defineType} from 'sanity';
import {GiHamburgerMenu} from "react-icons/gi";
import {bodyLinksSchema} from '../bodyContent/bodyLinks.schema';

const siteFooterSchema = defineType({
    name: 'siteFooter',
    title: 'Site Footer',
    type: 'document',
    icon: GiHamburgerMenu,
    fields: [
        defineField({
            name: 'copyright',
            title: 'Copyright Text',
            type: 'string',
            initialValue: 'Dattu Patel.  All rights reserved.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'links',
            title: 'Footer Links',
            type: 'reference',
            to: [
                {type: bodyLinksSchema.name}
            ]
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Footer',
            }
        },
    },
});

export {
    siteFooterSchema
};
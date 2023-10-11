import {defineField, defineType} from 'sanity';
import {GiHamburgerMenu} from "react-icons/gi";
import {bodyImagesSchema} from '../bodyContent/bodyImages.schema';
import {bodyLinksSchema} from '../bodyContent/bodyLinks.schema';

const siteNavbarSchema = defineType({
    name: 'siteNavbar',
    title: 'Site Navbar',
    type: 'document',
    icon: GiHamburgerMenu,
    fields: [
        defineField({
            name: 'openMenuText',
            title: 'Open Menu Text',
            type: 'string',
        }),
        defineField({
            name: 'closeMenuText',
            title: 'Close Menu Text',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'reference',
            to: [
                {type: bodyImagesSchema.name}
            ]
        }),
        defineField({
            name: 'links',
            title: 'Header Links',
            type: 'reference',
            to: [
                {type: bodyLinksSchema.name}
            ]
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Navbar',
            }
        },
    },
});

export {
    siteNavbarSchema
};
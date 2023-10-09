import {defineField, defineType} from 'sanity';
import {FaLink} from "react-icons/fa";
import {BodyLinksLinksControl} from "./controls/bodyLinksLinks.control";

const bodyLinksFieldSchema = defineType({
    name: 'bodyLinksField',
    title: 'Body - Links Field',
    type: 'object',
    icon: FaLink,
    fields: [
        defineField({
            name: 'links',
            title: 'Links',
            type: 'string',
            components: {
                input: BodyLinksLinksControl
            }
        })
    ]
});

export {
    bodyLinksFieldSchema
};

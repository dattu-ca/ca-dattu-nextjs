import {defineType} from 'sanity';

import {BlockGapsControls} from './controls/blockGaps.controls'

const createField = (viewport: string) => ({
    name: viewport.toLowerCase(),
    title: viewport,
    type: 'string',
    initialValue: 'Md',
    options: {
        list: [
            {title: 'None', value: 'None'},
            {title: 'Xs', value: 'Xs'},
            {title: 'Sm', value: 'Sm'},
            {title: 'Md', value: 'Md'},
            {title: 'Lg', value: 'Lg'},
            {title: 'Xl', value: 'Xl'},
        ]
    },
    validation: (rule) => rule.required(),
})

// @ts-ignore
const columnGapsSchema = defineType({
    name: 'columnGap',
    title: 'Column Gaps',
    description: 'The gaps between content of the columns',
    type: 'object',
    components: {
        input: BlockGapsControls,
    },
    fields: [
        createField('Xs'),
        createField('Sm'),
        createField('Md'),
        createField('Lg'),
        createField('Xl'),
    ]
});

export {
    columnGapsSchema
};

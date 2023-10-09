import {defineType} from 'sanity';

import {BlockWidthControls} from './controls/blockWidth.controls'

const createField = (viewport) => ({
    name: viewport.toLowerCase(),
    title: viewport,
    type: 'string',
    initialValue: 'Default',
    options: {
        list: [
            {title: 'Full Width', value: 'Full Width'},
            {title: 'Container Width', value: 'Container Width'},
            {title: 'Default', value: 'Default'},
            {title: 'Narrow', value: 'Narrow'},
        ]
    },
    validation: (rule) => rule.required(),
})

const blockWidthSchema = defineType({
    name: 'blockWidth',
    title: 'Block Width',
    description: 'The width for this content to take  up.',
    type: 'object',
    components: {
        input: BlockWidthControls,
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
    blockWidthSchema
};

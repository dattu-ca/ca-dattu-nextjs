import {defineType} from 'sanity';
import {BlockGapsControls} from './controls/blockGaps.controls'

const createField = (viewport) => ({
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

const blockGapsSchema = defineType({
    name: 'blockGap',
    title: 'Block Gaps',
    description: 'The gaps between columns for this content to take  up.',
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
    blockGapsSchema
};

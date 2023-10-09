import {defineType} from 'sanity';

import {ColumnSizeControls} from "./controls/columnSizes.controls";

const createField = (viewport: string) => ({
    name: viewport.toLowerCase(),
    title: viewport,
    type: 'array',
    of: [{type: 'number'}],
    initialValue: 12,
    validation: (rule) => rule.required(),
})

// @ts-ignore
const columnSizesSchema = defineType({
    name: 'columnSize',
    title: 'Column Sizes',
    description: 'The gaps between columns for this content to take  up.',
    type: 'object',
    components: {
        input: ColumnSizeControls,
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
    columnSizesSchema
};

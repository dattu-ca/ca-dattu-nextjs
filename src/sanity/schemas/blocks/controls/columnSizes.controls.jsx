import {useEffect, useMemo} from 'react';
import {Box, Flex, Text, Card, TextInput} from '@sanity/ui';
import {
    FieldMember,
    ObjectInputProps,
    useFormValue,
    set,
} from 'sanity';


export function ColumnSizeControls(props) {
    const numberOfColumnsProp = Number(useFormValue(['numberOfColumns']));
    const numberOfColumns = !isNaN(numberOfColumnsProp) ? Math.min(Math.max(1, numberOfColumnsProp), 5) : undefined;

    const {value, onChange} = props

    useEffect(() => {
        if (numberOfColumns) {
            const row = Array(numberOfColumns).fill(12);
            const param = set({
                'xs': [...row],
                'sm': [...row],
                'md': [...row],
                'lg': [...row],
                'xl': [...row],
            })
            onChange(param);
        }
    }, [numberOfColumns, onChange])

    const onChangeHandler = (viewport, index, inputValue) => {
        const newInputValue = Math.min(Math.max(0, Number(inputValue)), 12);
        const row = [...value[viewport]];
        row[index] = newInputValue;
        const param = set({
            ...value,
            [viewport]: row
        })
        onChange(param);
    }


    if (typeof numberOfColumns === 'undefined') {
        return <Card tone='caution' padding={4}><Text size={4}>Please enter a number of columns</Text></Card>
    }
    if (!value) {
        return null;
    }
    return (
        <Card>
            <Flex align="center" justify='center' gap={3} style={{marginBottom: 20}}>
                <Box flex={1}>
                    <Text>Viewport</Text>
                </Box>
                {
                    Array.from(Array(Math.min(Math.max(1, numberOfColumns), 5)).keys())
                        .map((i) => <Box flex={1} key={`header_${i}`}>
                            <Text>Column {i + 1}</Text>
                        </Box>)
                }
            </Flex>
            {
                ['Xs', 'Sm', 'Md', 'Lg', 'Xl'].map(viewport => (
                    <Flex align="center" justify='center' gap={3} key={viewport}>
                        <Box flex={1}>
                            <Text>{viewport}</Text>
                        </Box>
                        {
                            Array.from(Array(numberOfColumns).keys())
                                .map((i) => <Box flex={1} key={`header_${i}`}>
                                    <TextInput type='number'
                                               value={value[viewport.toLowerCase()][i]}
                                               min={0}
                                               max={12}
                                               onChange={(e) => onChangeHandler(viewport.toLowerCase(), i, e.currentTarget.value)}
                                    />
                                </Box>)
                        }
                    </Flex>
                ))
            }
        </Card>
    )
}
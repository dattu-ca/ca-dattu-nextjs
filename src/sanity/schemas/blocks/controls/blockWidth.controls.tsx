import {useCallback, useMemo} from 'react';
import {Box, Flex} from '@sanity/ui';
import {
    FieldMember,
    MemberField,
    ObjectInputProps,
    RenderFieldCallback,
} from 'sanity';


export function BlockWidthControls(props: ObjectInputProps) {
    const {members, renderInput, renderItem, renderPreview} = props

    const fieldMembers = useMemo(
        () => members.filter((mem) => mem.kind === 'field') as FieldMember[],
        [members],
    )

    const xs = fieldMembers.find((mem) => mem.name === 'xs')
    const sm = fieldMembers.find((mem) => mem.name === 'sm')
    const md = fieldMembers.find((mem) => mem.name === 'md')
    const lg = fieldMembers.find((mem) => mem.name === 'lg')
    const xl = fieldMembers.find((mem) => mem.name === 'xl')

    const renderField: RenderFieldCallback = useCallback(
        (props) => props.children,
        [],
    )

    const renderProps = useMemo(
        () => ({renderField, renderInput, renderItem, renderPreview}),
        [renderField, renderInput, renderItem, renderPreview],
    )

    return (
        <Box>
            <Flex align="center" justify='center' gap={3} style={{ textAlign: 'center', marginBottom: 15 }}>
                <Box flex={1} align='center'>
                    {xs && <strong>Xs</strong>}
                </Box>
                <Box flex={1} >
                    {sm && <strong>Sm</strong>}
                </Box>
                <Box flex={1}>
                    {md && <strong>Md</strong>}
                </Box>
                <Box flex={1}>
                    {lg && <strong>Lg</strong>}
                </Box>
                <Box flex={1}>
                    {xl && <strong>Xl</strong>}
                </Box>
            </Flex>
            <Flex align="center" gap={3}>
                <Box flex={1}>
                    {xs && <MemberField {...renderProps} member={xs}/>}
                </Box>
                <Box flex={1}>
                    {sm && <MemberField {...renderProps} member={sm}/>}
                </Box>
                <Box flex={1}>
                    {md && <MemberField {...renderProps} member={md}/>}
                </Box>
                <Box flex={1}>
                    {lg && <MemberField {...renderProps} member={lg}/>}
                </Box>
                <Box flex={1}>
                    {xl && <MemberField {...renderProps} member={xl}/>}
                </Box>
            </Flex>

        </Box>
    )
}
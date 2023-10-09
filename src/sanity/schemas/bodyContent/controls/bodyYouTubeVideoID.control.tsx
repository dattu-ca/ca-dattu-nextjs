import {ArrowRightIcon} from '@sanity/icons'
import {Box, Stack, Flex, Text, Button, TextInput, Card} from '@sanity/ui'
import {useCallback, useMemo, useState} from 'react'
import {useFormValue} from 'sanity'
import {
    FieldMember,
    MemberField,
    ObjectInputProps,
    RenderFieldCallback,
} from 'sanity'
import {youtubeServices} from "~/services.youtube";


export function BodyYouTubeVideoIDControl(props: ObjectInputProps) {
    const [isFetching, setIsFetching] = useState(false);
    const [video, setVideo] = useState<{ title: string, url: string, description: string  }>({
        description: '',
        title: '',
        url: ''
    })
    const {value, elementProps, validation} = props;
    const documentId = useFormValue(["_id"]);
    const docId = typeof documentId === "string"
        ? documentId.replace("drafts.", "")
        : props.id;


    const onFetchHandler = async () => {

        if (validation.length === 0) {
            setIsFetching(true);
            const video = await youtubeServices.fetchVideo(value as string);
            setIsFetching(false);
            if (video && video.items && Array.isArray(video.items) && video.items.length > 0) {
                console.log('videeeeee', video.items[0])
                const url = `https://www.youtube.com/watch?v=${value}`;
                setVideo({
                    title: video.items[0].snippet.title,
                    url: url,
                    description: video.items[0].snippet.description.replace(/\n/g, '<br/>')
                })
            }
        }
    }


    return (
        <Box>
            <Flex align="center" justify='center' gap={1} style={{textAlign: 'center', marginBottom: 15}}>
                <Stack flex={1} space={2}>
                    <TextInput {...elementProps}  />
                </Stack>
                <Box>
                    <Button type='button'
                            mode="ghost"
                            text="Fetch"
                            onClick={onFetchHandler}
                            disabled={isFetching}
                    />
                </Box>
            </Flex>
            <Stack padding={4} space={[3, 3, 4, 5]}>
                <Card>
                    <Text size={1}>{video.title}</Text>
                </Card>
                <Card>
                    <Text size={1}>{video.url}</Text>
                </Card>
                <Card>
                    <Text size={1}>
                        <div dangerouslySetInnerHTML={{__html: video.description}}/>
                    </Text>
                </Card>
            </Stack>
        </Box>
    )
}
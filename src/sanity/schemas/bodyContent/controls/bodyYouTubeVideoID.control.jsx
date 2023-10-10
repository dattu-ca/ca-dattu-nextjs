import {Box, Stack, Flex, Text, Button, TextInput, Card} from '@sanity/ui'
import {useState} from 'react'
import {youtubeServices} from "~/services.youtube";
import {FaSpinner} from "react-icons/fa";


export function BodyYouTubeVideoIDControl(props) {
    const [isFetching, setIsFetching] = useState(false);
    const [video, setVideo] = useState({
        description: '',
        title: '',
        url: ''
    })
    const {value, elementProps, validation} = props;

    const onFetchHandler = async () => {
        if (validation.length === 0) {
            setIsFetching(true);
            const video = await youtubeServices.fetchVideo(value);
            setIsFetching(false);
            if (video && video.items && Array.isArray(video.items) && video.items.length > 0) {
                const url = `https://www.youtube.com/watch?v=${value}`;
                setVideo({
                    title: video.items[0].snippet.title,
                    url: url,
                    description: video.items[0].snippet.description.replace(/\n/g, '<br/>')
                })
            }
        }
    }

    const onSetHandler = (key) => {
        
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
                {
                    isFetching && (<Card tone='primary' padding={4}>
                        <Flex align='center' gap={3} justify='center'>
                            <FaSpinner className='animate-spin'/>
                            <Text size={4} align='center'>Fetching</Text>
                        </Flex>
                    </Card>)
                }
                <Card tone={isFetching ? 'ghost' : 'default'}>
                    <Flex gap={2}>
                        <Box flex={1}>
                            <Text size={1}>{video.title}</Text>
                        </Box>
                        <Box>
                            <Button disabled={isFetching || !video.title}
                                    fontSize={1}
                                    padding={1}
                                    paddingX={4}
                                    mode='ghost'
                                    tone='primary'
                                    onClick={() => onSetHandler('title')}>Set</Button>
                        </Box>
                    </Flex>
                </Card>
                <Card tone={isFetching ? 'ghost' : 'default'}>
                    <Flex gap={2}>
                        <Box flex={1}>
                            <Text size={1}>{video.url}</Text>
                        </Box>
                        <Box>
                            <Button disabled={isFetching || !video.url}
                                    fontSize={1}
                                    padding={1}
                                    paddingX={4}
                                    mode='ghost'
                                    tone='primary'
                                    onClick={() => onSetHandler('url')}>Set</Button>
                        </Box>
                    </Flex>
                </Card>
                <Card tone={isFetching ? 'ghost' : 'default'}>
                    <Flex gap={2}>
                        <Box flex={1}>
                            <Text size={1}>
                                <div dangerouslySetInnerHTML={{__html: video.description}}/>
                            </Text>
                        </Box>
                        <Box>
                            <Button disabled={isFetching || !video.description}
                                    fontSize={1}
                                    padding={1}
                                    paddingX={4}
                                    mode='ghost'
                                    tone='primary'
                                    onClick={() => onSetHandler('description')}>Set</Button>
                        </Box>
                    </Flex>

                </Card>
            </Stack>
        </Box>
    )
}
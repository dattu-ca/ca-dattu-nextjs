import React, {useState} from 'react';
import {Box, TextInput, Flex, Tooltip, Button, Checkbox, Text} from '@sanity/ui';
import {BsArrowBarDown, BsArrowBarUp} from "react-icons/bs";
import {FaTrashCan} from "react-icons/fa6";
import {FaCheck, FaTimes} from "react-icons/fa";


const LinkEditor = ({item, index, isLastInList, onChange, onCheckChanged, onRemove, onMoveUp, onMoveDown}) => {
    const [confirmRemove, setConfirmRemove] = useState(false);

    return (<Flex justify="space-between"
                  align="center"
                  gap={2}
    >
        <Box style={{width: 45}}>
            <Flex direction='column' gap={1}>
                <Button aria-label='Move Up'
                        icon={<BsArrowBarUp/>}
                        fontSize={1}
                        padding={1}
                        onClick={onMoveUp}
                        disabled={index === 0}/>
                <Button
                    aria-label='Move Down'
                    icon={<BsArrowBarDown/>}
                    fontSize={1}
                    padding={1}
                    onClick={onMoveDown}
                    disabled={isLastInList}/>
            </Flex>
        </Box>
        <Box style={{width: 70}}>
            <TextInput
                value={item.id}
                type="number"
                size="small"
                name="txtId"
                placeholder="id"
                min={1}
                style={{ textAlign: 'right'}}
                onChange={(e) => onChange(item.id, 'id', e)}
            />
        </Box>
        <Box flex={1}>
            <TextInput
                value={item.url}
                type="text"
                size="small"
                name="txtUrl"
                placeholder="url"
                onChange={(e) => onChange(item.id, 'url', e)}
            />
        </Box>
        <Box flex={1}>
            <TextInput
                value={item.label}
                type="text"
                size="small"
                name="txtLabel"
                placeholder="label"
                onChange={(e) => onChange(item.id, 'label', e)}
            />
        </Box>
        <Box flex={1}>
            <Flex align="center">
                <Checkbox id={`link_target_${item.id}`} style={{display: 'block'}} 
                          checked={item.target === "_blank"} 
                          onClick={() => onCheckChanged(item.id, 'target', item.target !== "_blank")} />
                <Box flex={1} paddingLeft={3}>
                    <Text>
                        <label htmlFor={`link_target_${item.id}`}>_blank?</label>
                    </Text>
                </Box>
            </Flex>
        </Box>
        <Box style={{width: 80}}>
            {
                confirmRemove
                    ? <Flex gap={1}>
                        <Tooltip placement="top" content="No">
                            <Button
                                fontSize={1}
                                tone='positive'
                                icon={<FaTimes/>}
                                onClick={setConfirmRemove.bind(this, false)}
                                aria-label="No"/>
                        </Tooltip>
                        <Tooltip placement="top" content="Yes">
                            <Button
                                fontSize={1}
                                tone='critical'
                                icon={<FaCheck/>}
                                onClick={onRemove.bind(this, item.id)}
                                aria-label="Yes"/>
                        </Tooltip>
                    </Flex>
                    : <Box>
                        <Tooltip placement="top" content="Delete this link">
                            <Button
                                fontSize={1}
                                padding={3}
                                tone='critical'
                                icon={<FaTrashCan/>}
                                onClick={setConfirmRemove.bind(this, true)}
                                aria-label="Delete"/>
                        </Tooltip>
                    </Box>
            }
        </Box>
    </Flex>);
};

export {LinkEditor};

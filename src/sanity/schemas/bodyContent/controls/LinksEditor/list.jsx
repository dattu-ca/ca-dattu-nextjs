import React, {useMemo} from 'react';
import _ from 'lodash';
import {Box, Button} from '@sanity/ui';
import {FaCirclePlus} from "react-icons/fa6";
import {LinkEditor} from "./linkEditor";


const LinksList = ({data, setNewLinks, nextId, levels, parentIds, newItem}) => {
    const remainingLevels = useMemo(() => levels - 1, [levels]);

    const onChangeHandler = (id, key, e) => {
        const newLinks = _.cloneDeep(data).links;
        const item = newLinks.find(item => item.id === id);
        if (item) {
            item[key] = e.target.value;
        }
        setNewLinks(parentIds, newLinks);
    }
    
    const onCheckChangedHandler = (id, key, newValue) =>{
        const newLinks = _.cloneDeep(data).links;
        const item = newLinks.find(item => item.id === id);
        
        if (item && key === 'target') {
            item[key] = newValue ? '_blank' : '_self';
        }
        setNewLinks(parentIds, newLinks);
    }

    const onRemoveHandler = (id) => {
        const newLinks = _.cloneDeep(data).links.filter(item => item.id !== id)
        setNewLinks(parentIds, newLinks);
    }

    const onAddHandler = (index) => {
        const newLinks = _.cloneDeep(data).links;
        newLinks.splice(index, 0, newItem);
        setNewLinks(parentIds, newLinks);
    }

    const onMoveUpHandler = (index) => {
        if (index === 0) {
            return;
        }
        const newData = _.cloneDeep(data);
        const links = newData.links;
        [links[index], links[index - 1]] = [links[index - 1], links[index]]
        setNewLinks(parentIds, links);
    }

    const onMoveDownHandler = (index) => {
        if (index === data.links.length - 1) {
            return;
        }
        const newData = _.cloneDeep(data);
        const links = newData.links;
        [links[index], links[index + 1]] = [links[index + 1], links[index]]
        setNewLinks(parentIds, links);
    }

    return (
        <ul style={{listStyle: 'none', paddingLeft: 10, width: "100%"}}>
            {
                data.links.map((item, index) => (
                    <li key={item.id}>
                        <LinkEditor item={item}
                                    index={index}
                                    isLastInList={index === data.links.length - 1}
                                    onChange={onChangeHandler}
                                    onCheckChanged={onCheckChangedHandler}
                                    onRemove={onRemoveHandler}
                                    onMoveUp={onMoveUpHandler.bind(this, index)}
                                    onMoveDown={onMoveDownHandler.bind(this, index)}
                        />
                        {
                            remainingLevels > 0
                            && (
                                <Box marginTop="spacingS">
                                    <LinksList data={item}
                                               setNewLinks={setNewLinks}
                                               nextId={nextId}
                                               levels={remainingLevels}
                                               parentIds={[...parentIds, item.id]}
                                               newItem={newItem}/>
                                </Box>
                            )
                        }
                        <Box marginBottom="spacingS"/>
                    </li>
                ))
            }
            <li style={{textAlign: 'center', marginTop: 10, marginBottom: 10}}>
                <Button tone='primary'
                        fontSize={1}
                        padding={1}
                        style={{paddingRight: 35}}
                        icon={<FaCirclePlus/>}
                        onClick={onAddHandler.bind(this, data.links.length)}>                    
                    ADD ({parentIds.at(-1)})
                </Button>
            </li>
        </ul>
    );
};

export {LinksList};

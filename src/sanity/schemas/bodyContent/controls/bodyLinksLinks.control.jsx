import {useEffect, useMemo, useState} from "react";
import {isEqual} from 'lodash'
import {LinksEditor} from "./LinksEditor";
import {set} from "sanity";

const flattenLinks = (links) => {
    return links.reduce((prev, curr) => {
        return [...prev, curr, ...flattenLinks(curr.links)];
    }, [])
}


export function BodyLinksLinksControl(props) {
    const {value, onChange} = props;

    const [data, setData] = useState(value ? JSON.parse(value) : {links: []});

    useEffect(() => {
        const param = set(JSON.stringify(data));
        if (!isEqual(JSON.stringify(data), value)) {
            onChange(param);
        }
    }, [data, onChange, value]);


    const nextAvailableId = useMemo(() => String(Math.max(0, ...flattenLinks(data.links).map(item => item.id)) + 1), [data.links])

    const setNewLinksHandler = (parentIds, newLinks) => {
        setData(prev => {
            const newPrev = _.cloneDeep(prev);
            if (parentIds.length === 0) {
                newPrev.links = newLinks;
            } else {
                let item = newPrev;
                parentIds.every(id => {
                    item = item.links.find(sub => sub.id === id);
                    return true;
                })
                item.links = newLinks;
            }
            return newPrev;
        })
    }

    const newItem = useMemo(() => ({
        id: nextAvailableId,
        url: '',
        label: '',
        target: "_self",
        links: [],
    }), [nextAvailableId])

    return <div>
        <LinksEditor data={data}
                     parentIds={[]}
                     setNewLinks={setNewLinksHandler}
                     nextId={nextAvailableId}
                     levels={2}
                     newItem={newItem}/>
    </div>
}
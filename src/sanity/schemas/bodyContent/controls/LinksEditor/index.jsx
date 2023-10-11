import React from 'react';
import {LinksList} from "./list";


const LinksEditor = ({data, setNewLinks, nextId, levels, parentIds, newItem}) => {
    return (
        <LinksList
            data={data}
            setNewLinks={setNewLinks}
            nextId={nextId}
            levels={levels}
            parentIds={parentIds}
            newItem={newItem}
        />
    );
};

export {LinksEditor};

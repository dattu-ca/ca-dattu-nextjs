import { Fragment } from "react";
import clsx from "clsx";
import PropTypes from 'prop-types';
import Link from 'next/link';

import { PortableText } from '@portabletext/react'

const Renderer = ({ document } = { document: undefined }) => {
    if (!document) {
        return null;
    }
    return <Fragment>
        <PortableText
            value={document}

        />
        <div>
        <pre>{JSON.stringify(document, null, 2)}</pre>
        </div>
    </Fragment>
}

Renderer.propTypes = {
    document: PropTypes.object
}

export {
    Renderer
};
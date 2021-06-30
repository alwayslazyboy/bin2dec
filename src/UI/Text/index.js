import React from 'react';

function getSize (size) {
    return 'is-size-' + size;
}

export default function Text ({size, className, children }) {
    const classes = `text ${className || ''} ${getSize(size) || ''}`;
    return <p className={classes}>{children}</p>;
}

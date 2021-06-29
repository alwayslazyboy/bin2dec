import React from 'react';

export default function Text ({className, children }) {
    const classes = `text ${className || ''}`;
    return <p className={classes}>{children}</p>;
}

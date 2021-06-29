import React from 'react';

export default function Alert ({ type, children }) {
    const classes = `alert ${type ? 'is-' + type : ''}`;
    return <p className={classes}>{children}</p>;
}

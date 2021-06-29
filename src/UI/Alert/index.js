import React from 'react';

function getColorModifier (props) {
    if (props.danger) return 'is-danger';
    return 'is-info';
}

export default function Alert (props) {
    const colorModifier = getColorModifier(props);
    const classes       = `alert ${colorModifier}`;

    return <p className={classes}>{props.children}</p>;
}

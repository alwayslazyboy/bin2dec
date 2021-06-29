import React from 'react';

function getColorModifier (props) {
    if (props.primary) return 'is-primary';
    return 'is-default';
}

export default function Button (props) {
    const colorModifier = getColorModifier(props);
    const classes       = `button ${colorModifier}`;

    return (
        <button 
            className={classes}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

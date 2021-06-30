import React from 'react';

export default function Link ({ to, newTab = false, children }) {
    return <a href={to} target={newTab ? '_blank' : '_self'}>{children}</a>;
}

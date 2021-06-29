import React, { createElement } from 'react';

export default function Heading ({ level = 2, className, children }) {
    return createElement('h' + level, { className }, children);
}

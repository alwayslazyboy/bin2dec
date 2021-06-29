import React from 'react';
import Heading from '../Heading';
import Text from '../Text';

export default function Title ({ heading = true, level = 2, children }) {
    return (
        <React.Fragment>
            { 
                heading 
                ? <Heading level={level} className="title">{children}</Heading> 
                : <Text className="title">{children}</Text>
            }
        </React.Fragment>
    );
}

import React from 'react';
import Bin2Dec from './components/Bin2Dec';
import Title from './UI/Title';
import Subtitle from './UI/Subtitle';
import Text from './UI/Text';
import Link from './UI/Link';

export default function App () {
    return (
        <React.Fragment>
            <div className="app-head">
                <Title level="1">Bin2Dec</Title>
                <Subtitle>Converts a binary number to decimal.</Subtitle>
            </div>
            <div className="app-body">
                <Bin2Dec />
            </div>
            <div className="app-foot">
                <Text size={7}>
                    <Link 
                        to="https://github.com/alwayslazyboy/bin2dec"
                        newTab={true}>
                        Source code at github.com/alwayslazyboy
                    </Link>
                </Text>
            </div>
        </React.Fragment>
    );
}

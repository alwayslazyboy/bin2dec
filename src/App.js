import React from 'react';
import Bin2Dec from './components/Bin2Dec';
import Title from './UI/Title';
import Subtitle from './UI/Subtitle';

export default function App () {
    return (
        <React.Fragment>
            <div className="app-head">
                <Title level="1">Bin2Dec</Title>
                <Subtitle>Converts binary to decimal</Subtitle>
            </div>
            <div className="app-body">
                <Bin2Dec />
            </div>
        </React.Fragment>
    );
}

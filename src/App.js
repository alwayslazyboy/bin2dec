import React from 'react';
import Bin2Dec from './components/Bin2Dec';

export default function App () {
    return (
        <React.Fragment>
            <div className="app-head">
                <h1 className="title">
                    Bin2Dec
                </h1>
                <p className="subtitle">
                    Converts binary to decimal.
                </p>
            </div>
            <div className="app-body">
                <Bin2Dec />
            </div>
            <div className="app-foot">
                <p className="credit">
                    by @alwayslazyboy
                </p>
            </div>
        </React.Fragment>
    );
}

import React, { useState, useReducer } from 'react';
import { bin2dec } from '../../utilities';
import Textarea from '../../UI/Textarea';
import ButtonGroup from '../../UI/ButtonGroup';
import Button from '../../UI/Button';
import Text from '../../UI/Text';
import Title from '../../UI/Title';
import Alert from '../../UI/Alert';

const ACTIONS = {
    ADD_ZERO: 'add-zero',
    ADD_ONE: 'add-one',
    CONVERT: 'convert',
    CLEAR: 'clear',
    INPUT: 'input'
};

function binaryReducer (state, action) {
    switch (action.type) {
        case ACTIONS.INPUT:
            return action.payload.value;
        case ACTIONS.ADD_ZERO:
            return state + '0';
        case ACTIONS.ADD_ONE:
            return state + '1';
        case ACTIONS.CONVERT:
            if (state.length < 1) {
                if (typeof action.onSetAlert === 'function') {
                    action.onSetAlert({
                        type: 'info',
                        message: 'Please, enter at least the digits 1 or 0.'
                    });
                }
                return state;
            }
            if (typeof action.onSetDecimal === 'function') {
                action.onSetDecimal(bin2dec(state));
            }
            if (typeof action.onSetAlert === 'function') {
                action.onSetAlert(null);
            }
            return state;
        case ACTIONS.CLEAR:
            if (typeof action.onSetDecimal === 'function') {
                action.onSetDecimal(0);
            }
            if (typeof action.onSetAlert === 'function') {
                action.onSetAlert(null);
            }
            return '';
        default:
            return state;
    }
}

export default function Bin2Dec () {
    const [decimal, setDecimal] = useState(0);
    const [binary, dispatch] = useReducer(binaryReducer, '');
    const [alert, setAlert] = useState(null);

    const appendClickHandler = (type) => () => {
        dispatch({ type });
        setAlert(null);   
    }

    return (
        <div className="bin2dec">
            <div className="bin2dec-head">
                <Title level="2">Input</Title>
            </div>
            <div className="bin2dec-body">
                <div className="bin2dec--div">
                    <Textarea
                        value={binary}
                        placeholder="Type here" 
                        dispatch={dispatch}
                        onSetAlert={setAlert}
                    />
                </div>
                <div className="bin2dec--div">
                    <ButtonGroup>
                        <Button 
                            default 
                            onClick={appendClickHandler('add-zero')}>
                            0
                        </Button>
                        <Button 
                            default 
                            onClick={appendClickHandler('add-one')}>
                            1
                        </Button>
                        <Button 
                            primary 
                            onClick={() => 
                                dispatch({ 
                                    type: 'convert', 
                                    onSetDecimal: setDecimal,
                                    onSetAlert: setAlert
                                })
                            }>
                            Convert
                        </Button>
                        <Button 
                            danger 
                            onClick={() => 
                                dispatch({ 
                                    type: 'clear', 
                                    onSetDecimal: setDecimal,
                                    onSetAlert: setAlert
                                })
                            }>
                            Clear
                        </Button>
                    </ButtonGroup>
                </div>
                {alert && (
                    <div className="bin2dec--div">
                        <Alert type={alert.type}>{alert.message}</Alert>
                    </div>
                )}
            </div>
            <div className="bin2dec-foot">
                <Title level="2">Output</Title>
                <Text>{decimal}</Text>
            </div>
        </div>
    );
}

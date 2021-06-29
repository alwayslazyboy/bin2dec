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

const ALERT_ACTIONS = {
    INFO: 'info',
    ERROR: 'error',
    CLEAR: 'clear'
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
                action.alertDispatch({ 
                    type: 'info', 
                    payload: { message: 'Insert a binary string on input' }
                });

                return state;
            }

            if (typeof action.onSetDecimal === 'function') {
                action.onSetDecimal(bin2dec(state));
                action.alertDispatch({ type: 'clear' });
            }

            return state;
        case ACTIONS.CLEAR:
            if (typeof action.onSetDecimal === 'function') {
                action.onSetDecimal(0);
            }
            return '';
        default:
            return state;
    }
}

function alertReducer (state, action) {
    switch (action.type) {
        case ALERT_ACTIONS.INFO:
            return { 
                type: 'info', 
                message: action.payload.message 
            };
        case ALERT_ACTIONS.ERROR:
            return { 
                type: 'error', 
                message: action.payload.message 
            };
        case ALERT_ACTIONS.CLEAR:
            return null;
        default:
            return state;
    }
}

export default function Bin2Dec () {
    const [decimal, setDecimal] = useState(0);
    const [binary, dispatch] = useReducer(binaryReducer, '');
    const [alert, alertDispatch] = useReducer(alertReducer, null);

    return (
        <div className="bin2dec">
            <div className="bin2dec-head">
                <Title level="2">Input</Title>
            </div>
            <div className="bin2dec-body">
                <div className="bin2dec-control bin2dec--div">
                    <Textarea
                        value={binary}
                        placeholder="Type here" 
                        dispatch={dispatch}
                        alertDispatch={alertDispatch}
                    />
                </div>
                <div className="bin2dec-actions bin2dec--div">
                    <ButtonGroup>
                        <Button 
                            default 
                            onClick={() => dispatch({ type: 'add-zero' })}>
                            0
                        </Button>
                        <Button 
                            default 
                            onClick={() => dispatch({ type: 'add-one' })}>
                            1
                        </Button>
                        <Button 
                            primary 
                            onClick={() => 
                                dispatch({ 
                                    type: 'convert', 
                                    onSetDecimal: setDecimal,
                                    alertDispatch: alertDispatch
                                })
                            }>
                            Convert
                        </Button>
                        <Button 
                            danger 
                            onClick={() => 
                                dispatch({ 
                                    type: 'clear', 
                                    onSetDecimal: setDecimal 
                                })
                            }>
                            Clear
                        </Button>
                    </ButtonGroup>
                </div>
                {alert && (
                    <div className="bin2dec--div">
                        <Alert danger>{alert.message}</Alert>
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

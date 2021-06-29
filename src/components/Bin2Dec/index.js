import React, { useState, useReducer } from 'react';
import { bin2dec } from '../../utilities';
import Box from '../../UI/Box';
import Textarea from '../../UI/Textarea';
import ButtonGroup from '../../UI/ButtonGroup';
import Button from '../../UI/Button';
import Text from '../../UI/Text';
import Title from '../../UI/Title';

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
            if (state.length > 1 && typeof action.onSetDecimal === 'function') {
                action.onSetDecimal(bin2dec(state));
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

export default function Bin2Dec () {
    const [decimal, setDecimal] = useState(0);
    const [binary, dispatch]    = useReducer(binaryReducer, '');

    return (
        <Box>
            <Title level="2">Input</Title>
            <Textarea
                value={binary}
                placeholder="Type here" 
                dispatch={dispatch}
            />
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
                    onClick={() => dispatch({ type: 'convert', onSetDecimal: setDecimal })}>
                    Convert
                </Button>
                <Button 
                    danger 
                    onClick={() => dispatch({ type: 'clear', onSetDecimal: setDecimal })}>
                    Clear
                </Button>
            </ButtonGroup>
            <Title level="2">Output</Title>
            <Text>
                { decimal }
            </Text>
        </Box>
    );
}

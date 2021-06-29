import React from 'react';

export default function Textarea ({ value, placeholder, dispatch }) {
    function keyPressHandler (evt) {
        if (! (evt.charCode === 48 || evt.charCode === 49)) {
            return evt.preventDefault();
        }
    }

    function changeHandler (evt) {
        dispatch({
            type: 'input',
            payload: { value: evt.target.value }
        });
    }

    return (
        <textarea
            value={value}
            placeholder={placeholder}
            onKeyPress={keyPressHandler}
            onChange={changeHandler}>
        </textarea>
    )
}

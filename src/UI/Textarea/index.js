import React from 'react';

export default function Textarea ({ value, placeholder, dispatch, alertDispatch }) {
    function keyPressHandler (evt) {
        if (! (evt.charCode === 48 || evt.charCode === 49)) {
            alertDispatch({
                type: 'error',
                payload: { message: 'Please, insert only 0 or 1.' }
            });

            return evt.preventDefault();
        }

        alertDispatch({ type: 'clear' });
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

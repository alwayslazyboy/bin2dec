import React from 'react';

export default function Textarea ({ value, placeholder, dispatch, onSetAlert }) {
    function keyPressHandler (evt) {
        if (! (evt.charCode === 48 || evt.charCode === 49)) {
            onSetAlert({
                type: 'danger',
                message: 'Please, insert 0 or 1.'
            });

            return evt.preventDefault();
        }

        onSetAlert(null);
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

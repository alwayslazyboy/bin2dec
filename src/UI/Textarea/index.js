import React from 'react';

export default function Textarea ({ value, placeholder, dispatch, onSetAlert }) {
    function keyPressHandler (evt) {
        console.log(evt.charCode)
        if ([48, 49].includes(evt.charCode) === false) {
            onSetAlert({
                type: 'danger',
                message: 'Please, enter only digits 1 or 0.'
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
            className="textarea"
            value={value}
            placeholder={placeholder}
            onKeyPress={keyPressHandler}
            onChange={changeHandler}>
        </textarea>
    )
}

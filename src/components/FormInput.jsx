import React from 'react';
import { Form } from 'react-bootstrap';

const FormInput = ({
    name,
    label,
    value,
    onInputChange,
    invalidText,
    isRequired,
    minLength,
    maxLength,
    inputMode,
    type,
    ...props
}) => {
    const restrictions = {};

    if (minLength) {
        restrictions.minLength = minLength;
    }
    if (maxLength) {
        restrictions.maxLength = maxLength;
    }
    if (inputMode) {
        restrictions.inputMode = inputMode;
    }

    return (
        <Form.Group {...props} controlId={name}>
            <Form.Label>{label}</Form.Label>

            <Form.Control 
                type={type || 'text'} 
                name={name} value={value} 
                placeholder={label} 
                onChange={onInputChange} 
                required={isRequired}
                {...restrictions}
            />

            {invalidText && <Form.Control.Feedback type="invalid">{invalidText}</Form.Control.Feedback>}
        </Form.Group>
    );
};

export default FormInput;

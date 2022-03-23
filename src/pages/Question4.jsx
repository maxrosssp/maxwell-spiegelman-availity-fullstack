import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PageHeading from '../components/PageHeading';
import { validateParentheses } from '../services/utils';

const Question4 = () => {
    const [input, setInput] = useState('');
    const [validated, setValidated] = useState(false);

    const updateInput = (value) => {
        setInput(value);
        setValidated(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target['controlCode'].setCustomValidity(validateParentheses(input) ? '' : 'Invalid');
        setValidated(true);
    };

    return (
        <div id="question-4">
            <PageHeading
                title="Parentheses Checker"
                questionType="Coding exercise"
                prompt={'You are tasked to write a checker that validates the parentheses ' +
                    'of a LISP code. Write a program (in Java or JavaScript) which takes in a ' + 
                    'string as an input and returns true if all the parentheses in the string ' +
                    'are properly closed and nested.'}
            />

            <div className="answer-content">
                <h3 className="pb-2">LISP Parentheses Validator</h3>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="controlCode">
                        <Form.Label>Enter LISP Code:</Form.Label>

                        <Form.Control 
                            required 
                            as="textarea" 
                            rows={3} 
                            value={input} 
                            placeholder="Code..." 
                            onChange={({ target }) => updateInput(target.value)} 
                        />

                        <Form.Control.Feedback type="invalid">{input ? 'Invalid parentheses.' : 'You must enter some text.'}</Form.Control.Feedback>
                        
                        <Form.Control.Feedback type="valid">Valid parentheses!</Form.Control.Feedback>
                    </Form.Group>

                    <div className="mb-2">
                        <Button variant="primary" size="lg" type="submit">Validate</Button>
                        {' '}
                        <Button variant="secondary" size="lg" onClick={() => updateInput('')}>Clear</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Question4;
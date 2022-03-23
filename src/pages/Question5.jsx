import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PageHeading from '../components/PageHeading';
import FormInput from '../components/FormInput';
import StateSelect from '../components/StateSelect';
import MessageModal from '../components/MessageModal';

const initialData = {
    firstName: '',
    lastName: '',
    npiNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: ''
};

const Question5 = () => {
    const [data, setData] = useState({ ...initialData });
    const [validated, setValidated] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateInput = ({ name, value }) => {
        setData({ ...data, [name]: value });
        setValidated(false);
    };

    const onInputChange = ({ target }) => updateInput(target);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === true) {
            setIsSubmitted(true);
        }

        setValidated(true);
    };

    const clearData = () => {
        setIsSubmitted(false);
        setValidated(false);
        setData({ ...initialData });
    };

    return (
        <div id="question-5">
            <PageHeading title="Parentheses Checker" questionType="Coding exercise from a frontend perspective">
                Healthcare providers request to be part of the Availity system. 
                Using React framework, create a registration user interface so healthcare 
                providers can electronically join Availity. The following data points should be collected:
                <div className="ps-4">
                    <ul>
                        <li>First and Last Name</li>
                        <li>NPI number</li>
                        <li>Business Address</li>
                        <li>Telephone Number</li>
                        <li>Email address</li>
                    </ul>
                </div>
            </PageHeading>

            <div id="user-registration" className="answer-content">
                <h3 className="pb-2">User Registration Form</h3>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <FormInput 
                            as={Col} 
                            md="4" 
                            name="firstName" 
                            label="First name" 
                            value={data.firstName} 
                            onInputChange={onInputChange} 
                            isRequired={true} 
                        />

                        <FormInput 
                            as={Col} 
                            md="4" 
                            name="lastName" 
                            label="Last name" 
                            value={data.lastName} 
                            onInputChange={onInputChange} 
                            isRequired={true} 
                        />

                        <FormInput
                            as={Col}
                            md="4"
                            name="npiNumber"
                            label="NPI Number"
                            value={data.npiNumber}
                            onInputChange={onInputChange}
                            minLength={10}
                            maxLength={10}
                            isRequired={true} invalidText="Must be 10 digit number." 
                        />
                    </Row>

                    <Row className="mb-3">
                        <FormInput
                            as={Col}
                            md="12"
                            name="addressLine1"
                            label="Address Line 1"
                            value={data.addressLine1}
                            onInputChange={onInputChange}
                            isRequired={true} 
                        />
                    </Row>

                    <Row className="mb-3">
                        <FormInput
                            as={Col}
                            md="12"
                            name="addressLine2"
                            label="Address Line 2"
                            value={data.addressLine2}
                            onInputChange={onInputChange}
                            isRequired={true} 
                        />
                    </Row>

                    <Row className="mb-3">
                        <FormInput
                            as={Col}
                            md="6"
                            name="city"
                            label="City"
                            value={data.city}
                            onInputChange={onInputChange}
                            isRequired={true} 
                        />

                        <Form.Group as={Col} md="3" controlId="state">
                            <Form.Label>State</Form.Label>

                            <StateSelect name="state" value={data.state} onChange={onInputChange} required />
                        </Form.Group>

                        <FormInput
                            as={Col}
                            md="3"
                            name="zipCode"
                            label="Zip code"
                            value={data.zipCode}
                            onInputChange={onInputChange}
                            minLength={5}
                            maxLength={5}
                            isRequired={true} 
                        />
                    </Row>

                    <Row className="mb-3">
                        <FormInput
                            as={Col}
                            md="6"
                            name="phone"
                            label="Phone number"
                            value={data.phone}
                            onInputChange={onInputChange} type="tel" inputMode="tel"
                            isRequired={true} 
                        />
                        
                        <FormInput
                            as={Col}
                            md="6"
                            name="email"
                            label="Email address"
                            value={data.email}
                            onInputChange={onInputChange} type="email" inputMode="email"
                            isRequired={true} 
                        />
                    </Row>

                    <div className="pt-3 d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit">Register</Button>
                    </div>
                </Form>
            </div>

            <MessageModal headingText="User Registered!" show={isSubmitted} onClose={clearData}>
                <p>Successfully registered user with the following data:</p>

                <ul>{Object.entries(data).map(([name, value]) => <li key={name}>{`${name}: ${value}`}</li>)}</ul>
            </MessageModal>
        </div>
    );
};

export default Question5;
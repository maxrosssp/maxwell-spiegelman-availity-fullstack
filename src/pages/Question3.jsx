import React from 'react';
import PageHeading from '../components/PageHeading';

const Question3 = () => (
    <div id="question-3">
        <PageHeading
            title="Availity's Purpose"
            questionType="Short answer"
            prompt="How would you explain to your grandmother what Availity does?"
        />

        <div className="answer-content">
            <p>
                My grandmother probably wouldn't understand any explanation, considering the fact that she isn't alive.
                But if she were, I would tell her that Availity simplifies the communication between healthcare providers 
                and insurance companies. Each insurance company has their own way of doing things, so managing communications 
                with each one directly is hard to do. Instead, healthcare providers can always come to Availity when they need to 
                talk with any insurance company for any reason, and Availity handles the hard part.
            </p>
        </div>
    </div>
);

export default Question3;
import React from 'react';
import PageHeading from '../components/PageHeading';

const Question1 = () => (
    <div id="question-1">
        <PageHeading
            title="My Proudest Professional Achievement"
            questionType="Short answer"
            prompt="Tell me about your proudest professional achievement. It can also be a personal or school project."
        />

        <div className="answer-content">
            <p>
                My proudest professional achievement was successfully designing and implementing a user management portal for
                the application I've been working on for the past couple of years. Since I was given free reign to develop
                this new app, I took the opportunity to break free from the legacy frameworks that our team had been working
                within for years, and I designed a tech stack utilizing the latest tools. Even though I had no experience
                with any of these new tools, I learned as I went, and the app was ready and deployed to production ahead of 
                schedule. Furthermore, after it's completion, when I switched to working on a different app, another team took over
                maintaining it, and I've only gotten a handful of questions from them since. I tried to make the code as simple 
                and easy to understand as possible, so it's nice to see that it paid off.
            </p>
        </div>
    </div>
);

export default Question1;
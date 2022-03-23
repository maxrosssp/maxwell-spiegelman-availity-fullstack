import React from 'react';

const PageHeading = ({
    title,
    questionType,
    prompt,
    children
}) => (
    <div className="page-heading">
        <h1 className="title">{title}</h1>

        <h4 className="question">
            {questionType}: <span className="question-text">{prompt || children}</span>
        </h4>
    </div>
);

export default PageHeading;

import React from 'react';
import PageHeading from '../components/PageHeading';

const Question2 = () => (
    <div id="question-2">
        <PageHeading
            title="Recently Read"
            questionType="Short answer"
            prompt={'Tell me about something you have read recently that you would ' + 
                'recommend and why. (Can be a Github Repo, Article, Blog, Book, etc)'}
        />

        <div className="answer-content">
            <p>
                Recently, I read "How to Have Impossible Conversations" by Peter Boghossian and James Lindsay. It's a collection of 
                strategies for how to have successful conversations with someone on a topic or issue on which you don't see eye to eye.
                In this time of extreme polarization, conversations too often and too quickly turn into debates in which each party is
                just talking past the other. This book demonstrates that the only way to come to a mutual understanding, is to truly
                listen to the other person in order to understand the best version of their stance, and to be willing to change your own mind.
            </p>
        </div>
    </div>
);

export default Question2;
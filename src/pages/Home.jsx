import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Home = () => (
    <div id="home">
        <h4 className="question">
            Thanks for checking this out. Hope you enjoy! The answer to each question can be viewed 
            by navigating with the sidebar on the left.
        </h4>

        <p>
            Here's the assignment: 

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                <Viewer fileUrl="/assets/availity_assignment.pdf"></Viewer>
            </Worker>
        </p>
    </div>
);

export default Home;
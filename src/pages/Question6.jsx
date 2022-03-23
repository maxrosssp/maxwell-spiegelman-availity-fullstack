import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PageHeading from '../components/PageHeading';
import MessageModal from '../components/MessageModal';
import { parseEnrollmentsCsv } from '../services/utils';

const Question6 = () => {
    const [companies, setCompanies] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === true) {
            parseEnrollmentsCsv(event.currentTarget.enrollmentFile.files.item(0)).then(setCompanies).catch(setError);
        }

        setSubmitted(true);
        setValidated(true);
    };

    const onModalClose = () => {
        setCompanies([]);
        setSubmitted(false);
        setValidated(false);
    };

    return (
        <div id="question-6">
            <PageHeading title="Enrollment By Company" questionType="Coding exercise">
                Availity receives enrollment files from various benefits management and enrollment 
                solutions (I.e. HR platforms, payroll platforms). Most of these files are typically 
                in EDI format. However, there are some files in CSV format. For the files in CSV format, 
                write a program in a language that seems appropriate to you that will read the content of 
                the file and separate enrollees by insurance company in its own file. Additionally, sort 
                the contents of each file by last and first name (ascending). Lastly, if there are duplicate 
                User Ids for the same Insurance Company, then only the record with the highest version 
                should be included. The following data points are included in the file:
                <div className="ps-4">
                    <ul>
                        <li>User Id (string)</li>
                        <li>First and Last Name (string)</li>
                        <li>Version (integer)</li>
                        <li>Insurance Company (string)</li>
                    </ul>
                </div>
            </PageHeading>

            <MessageModal 
                show={companies.length > 0} 
                headingText="Download Enrollment Files By Company"
                onClose={onModalClose}
            >
                Click on a company below to download their enrollment file. All downloaded files will be in CSV format.

                <ul>
                    {companies.map((company) => (
                        <li key={company.name}>
                            <a download={company.fileName} href={company.csvDownloadUrl}>{company.name}</a>
                        </li>
                    ))}
                </ul>
            </MessageModal>

            <MessageModal 
                show={submitted && companies.length <= 0} 
                headingText="Error!"
                bodyText="The uploaded file was unable to be sorted into separate company files. Please try again with a different file."
                onClose={onModalClose}
            />

            <div className="answer-content">
                <h3 className="pb-2">Enrollment File Sorter</h3>

                <Form className="pb-2" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="enrollmentFile" className="mb-3">
                        <Form.Label>Upload enrollment file (.csv)</Form.Label>

                        <Form.Control type="file" accept=".csv" />
                    </Form.Group>

                    <div className="pt-3 d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit">Sort Enrollment File</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Question6;
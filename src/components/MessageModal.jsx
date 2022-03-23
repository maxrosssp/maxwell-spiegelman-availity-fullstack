import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MessageModal = ({
    headingText,
    bodyText,
    show,
    onClose,
    children
}) => (
    <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>{headingText}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {bodyText}
            {children}
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>Close</Button>
        </Modal.Footer>
    </Modal>
);

export default MessageModal;
import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, NavLink } from 'react-router-dom';
import {
    Home,
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6
} from './pages';
import './App.scss';

const App = () => (
    <Container className="vh-100 d-flex flex-column" fluid>
        <Navbar as={Row} bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">
                    <img alt="" src="../assets/availity_logo.png" width="30" height="30" className="d-inline-block align-top" />
                    {' Maxwell\'s Fullstack Homework Assignment'}
                </Navbar.Brand>
            </Container>
        </Navbar>

        <Row className="h-100">
            <Col xs={2} id="sidebar" className="pt-1">      
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link as={NavLink} to="/question-1">Answer #1</Nav.Link>
                    <Nav.Link as={NavLink} to="/question-2">Answer #2</Nav.Link>
                    <Nav.Link as={NavLink} to="/question-3">Answer #3</Nav.Link>
                    <Nav.Link as={NavLink} to="/question-4">Answer #4</Nav.Link>
                    <Nav.Link as={NavLink} to="/question-5">Answer #5</Nav.Link>
                    <Nav.Link as={NavLink} to="/question-6">Answer #6</Nav.Link>
                </Nav>
            </Col>

            <Col xs={10} id="page-content" className="vh-100">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/question-1" element={<Question1 />} />
                    <Route path="/question-2" element={<Question2 />} />
                    <Route path="/question-3" element={<Question3 />} />
                    <Route path="/question-4" element={<Question4 />} />
                    <Route path="/question-5" element={<Question5 />} />
                    <Route path="/question-6" element={<Question6 />} />
                </Routes>
            </Col>
        </Row>
    </Container>
);

export default App;
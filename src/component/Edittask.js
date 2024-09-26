import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function EditTask() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <div>
            <h5 class='my-3'>Edit Task</h5>
            <div class="w-75">
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Row className="mb-3 mx-5">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Assigned To</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">User1</option>
                                <option value="2">User2</option>
                                <option value="3">User3</option>
                                <option value="3">User4</option>
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Status</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Not Started</option>
                                <option value="2">In Progress</option>
                                <option value="3">Completed</option>
                                <option value="3">In Progress</option>
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 mx-5">
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">12May2016</option>
                                <option value="2">16Aug2024</option>
                                <option value="3">20Sept2020</option>
                                <option value="3">25Dec2022</option>
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Priority</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Normal</option>
                                <option value="2">Low</option>
                                <option value="3">Heigh</option>
                                <option value="3">Low</option>
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 mx-5">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Row>
                    <button type="button" class="btn btn-outline-warning m-1 h-25">Cancel</button>
                    <button type="button" class="btn btn-outline-success">Save</button>
                </Form>
            </div>
        </div>
    );
}

export default EditTask;



















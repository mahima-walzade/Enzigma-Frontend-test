import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function DeleteTask() {
    return (
        <div>
            <div className="d-grid gap-2">
                <Button variant="danger" size="lg my-3">
                    Delete
                </Button>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <h6>Do you want to delete task?</h6>
                <button type="button" class="btn btn-outline-warning m-3 w-25 h-25">No</button>
                <button type="button" class="btn btn-outline-success w-25">Yes</button>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </div>
    );
}
export default DeleteTask;
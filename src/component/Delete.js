import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Delete(props) {
  return (
    <div className="Newtask template d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="80-w p-5 rounded bg-white">
        <form class="row g-1 needs-validation " novalidate>
          <div className="d-grid gap-2">
            <Button variant="danger" size="xl w-100 my-3">
              Delete
            </Button>
          </div>
          <Form.Group
            className="mb-3 w-75"
            controlId="exampleForm.ControlTextarea1"
          >
            <h6> Do you want to delete task?</h6>
            <button type="button" class="btn btn-outline-warning m-3">
              No
            </button>
            <button type="button" class="btn btn-outline-success ">
              Yes
            </button>
          </Form.Group>
        </form>
      </div>
    </div>
  );
}
export default Delete;

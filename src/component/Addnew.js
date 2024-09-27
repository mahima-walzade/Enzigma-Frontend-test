import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Addnew(props) {
  const [validated, setValidated] = useState(false);
  const [inputtask,setInputtask]=useState("")


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div >
      <h5 className="m-5 my-2">New Task</h5>
      <hr />
      <div class="w-75">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 mx-5">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Assigned To</Form.Label>
              <br />
              <input type="text" value={inputtask} placeholder="Enter user" onChange={(e)=>setInputtask(e.target.value)} className="w-100 h-23" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Status</Form.Label>
              <br />
              <select className="w-100 h-23">
                <option></option>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>In Progress</option>
              </select>
            </Form.Group>
          </Row>
          <Row className="mb-3 mx-5">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Due Date</Form.Label>
              <input type="date"
              value={inputtask} placeholder="Enter user" onChange={(e)=>setInputtask(e.target.value)} className="w-100 h-23" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Priority</Form.Label>
              <select className="w-100 h-23">
                <option></option>
                <option>Low</option>
                <option>High</option>
                <option>Low</option>
                <option>Normal</option>
              </select>
            </Form.Group>
          </Row>
          <Row className="mb-3 mx-5">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <br />
              <input type="text" className="w-50 " value={inputtask} placeholder="Enter desc" onChange={(e)=>setInputtask(e.target.value)} />
            </Form.Group>
          </Row>
          <button type="button" class="btn btn-outline-warning mx-4">
            Cancel
          </button>

          <button type="button" class="btn btn-outline-success"  >
            Save
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Addnew;

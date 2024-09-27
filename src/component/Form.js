import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import { useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Form() {

  const navigate = useNavigate();
  function navto(url) {
    navigate(url);
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary py-2">
        <Container fluid>
          <Navbar.Brand>Task</Navbar.Brand>
          <br />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link href="#action1"></Nav.Link>
              <Nav.Link href="#action2"></Nav.Link>
              <Nav.Link href="#" disabled></Nav.Link>
            </Nav>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example">
              <button
                type="button"
                class="btn btn-outline-warning"

                onClick={() => navto("/tasks/create")}>
                New Task
              </button>
              <button type="button" class="btn btn-outline-warning">
                {" "}
                Refresh
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary py-0">
        <Container fluid>
          <Navbar.Brand>All Task</Navbar.Brand>
          <br />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link href="#action1"></Nav.Link>
              <Nav.Link href="#action2"></Nav.Link>
              <Nav.Link href="#" disabled></Nav.Link>
            </Nav>
            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
         
        </Row>
      </Form>
           
             {/* <button
              type="button"
              class="btn btn-outline-success btn-lg my-2 mx-4">
              Search <i class="fa-solid fa-magnifying-glass"></i>
            </button>  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Assgned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User1</td>
            <td>Completed</td>
            <td>12/10/2024</td>
            <td>Low</td>
            <td>This task is good</td>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example">
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={() => navto("/tasks/details/:id")}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => navto("/tasks/delete/:id")}>
                {" "}
                Delete
              </button>
            </div>
          </tr>
          <tr>
            <td>User2</td>
            <td>In Progress</td>
            <td>14/09/2024</td>
            <td>High</td>
            <td>This task is good</td>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example">
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={() => navto("/tasks/details/:id")}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => navto("/tasks/delete/:id")}>
                {" "}
                Delete
              </button>
            </div>
          </tr>
          <tr>
            <td>User3</td>
            <td>Not Started</td>
            <td>18/08/2024</td>
            <td>Low</td>
            <td>This task is good</td>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example">
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={() => navto("/tasks/details/:id")}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => navto("/tasks/delete/:id")}>
                {" "}
                Delete
              </button>
            </div>
          </tr>
          <tr>
            <td>User4</td>
            <td>In Progress</td>
            <td>12/06/2024</td>
            <td>Normal</td>
            <td>This task is good</td>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example">
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={() => navto("/tasks/details/:id")}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => navto("/tasks/delete/:id")}>
                {" "}
                Delete
              </button>
            </div>
          </tr>
        </tbody>
      </Table>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      20
                    </a>
                  </li>
                </ul>
              </nav>
              <Nav.Link href="#action1"></Nav.Link>
              <Nav.Link href="#action2"></Nav.Link>
              <Nav.Link href="#" disabled></Nav.Link>
            </Nav>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">First</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;Prev</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;Next</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">Last</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Form;

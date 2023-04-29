import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "../../index.css";
const Doctors_profile = () => {
  const onsub = (e) => {
    e.preventDefault();
  };
  const reset = () => {};
  const onchange = () => {};
  return (
    <>
      <Container className="ms-panel">
        <div className="ms-panel-header ms-panel-custome">
          <h5>ADD DOCTORS</h5>
        </div>
        <div className="ms-panel-body">
          <Form onSubmit={onsub} className="formm">
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Frist Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Frist Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Doctor Department</Form.Label>
                <Form.Control type="text" placeholder="Doctor Department" />
              </Form.Group>
            </Row>
            <Row className="passAdd">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                <Form.Label>Mobile</Form.Label>

                <Form.Control type="text" placeholder="Enter Your Mobile " />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Specialist</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Specialist" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Address" />
              </Form.Group>
            </Row>
            <Row className="passAdd m-20">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Doctor Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>N-ID photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>
            <Row>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Short Biography"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Row>
            <Row>
              <div className="mb-3">
                <Form.Label>Gender</Form.Label>

                <Form.Check
                  type="radio"
                  id="default-radio-male"
                  label="Male"
                  name="group1"
                />
                <Form.Check
                  type="radio"
                  id="default-radio-female"
                  label="Female"
                  name="group1"
                />
              </div>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group as={Col}>
                <Button className="mb-9" variant="warning">
                  Reset
                </Button>
                <Button className="mb" variant="primary" type="submit">
                  Save
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
};
export default Doctors_profile;

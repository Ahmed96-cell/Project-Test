import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  FloatingLabel,
  Card,
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
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        <Card className="w-100" style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
            }}
          >
            <h5 className="p-3">Doctors Profile</h5>
          </div>
          <div className="ms-panel-body">
            <Form onSubmit={onsub} className="formm">
              <Row className="col-12  mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Frist Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    placeholder="Enter Frist Name"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </Form.Group>
              </Row>
              <Row className="passAdd">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Mobile " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    disabled
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Row>
              <Row className="col-12  mb-3">
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Enter Your Address"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control disabled type="date" />
                </Form.Group>
              </Row>
              <Row className="col-12  mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Doctor Department</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Doctor Department"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Specialist</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Enter Your Specialist"
                  />
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
                    disabled
                    checked
                    type="radio"
                    id="default-radio-male"
                    label="Male"
                    name="group1"
                  />
                  <Form.Check
                    disabled
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
        </Card>
      </div>
    </>
  );
};
export default Doctors_profile;

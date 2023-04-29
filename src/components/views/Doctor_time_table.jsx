import React, { useState } from "react";
import { GrFormSchedule } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "../../index.css";
import doctorImg from "../../assets/imgs/doctor-3.jpg";
import "../../index.css";

const Doctor_time_table = () => {
  const docdata = {
    id: 0,
    name: "ahmed yahia",
    department: "dentist",
    date: "",
    startTime: "",
    endTime: "",
  };
  const onsub = (e) => {
    e.preventDefault();
  };
  const reset = () => {};
  const onchange = () => {};
  return (
    <>
      <Container
        style={{
          backgroundColor: "#f1f5fc",
        }}
      >
        {/* <div className="w-100">
          <div className="w-100 d-flex flex-wrap">
            {doctors.map((e, i) => (
              <Col key={i} lg={4} md={4} sm={6} className="px-3">
                <Card style={{ marginBottom: "2rem" }}>
                  <div className="d-flex p-3" style={{ position: "relative" }}>
                    <div className="mb-3 w-100">
                      <div className="d-flex align-items-center">
                        <img
                          src={doctorImg}
                          alt=""
                          width="50px"
                          height="50px"
                          style={{ borderRadius: "50%", marginRight: "8px" }}
                        />
                        <div className="content w-100">
                          <h6
                            style={{
                              fontWeight: "500",
                              fontSize: "13px",
                              margin: "0",
                            }}
                          >
                            {e.name}
                          </h6>
                          <p
                            className="my-1"
                            style={{
                              fontSize: "12px",
                              color: "#878793",
                            }}
                          >
                            {e.jopTitle}
                          </p>
                          <p
                            className="mt-2 d-flex align-items-center"
                            style={{
                              fontWeight: "500",
                              fontSize: "13px",
                              margin: "0",
                            }}
                          >
                            <GrFormSchedule style={{ fontSize: "12px" }} />
                            {e.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </div>
        </div> */}
        <div>
          <h1>ADD SCHEDULE</h1>
          <Form onSubmit={onsub} className="formm">
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control disabled type="text" value={docdata.name} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Doctor Department</Form.Label>
                <Form.Control disabled type="text" value={docdata.department} />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Available Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Start time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>End time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>
            <Row>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={4}>
                    state
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label=" Inactive"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="Active"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
            </Row>
            <Row
              className="col-6
              mb-3"
            >
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

export default Doctor_time_table;

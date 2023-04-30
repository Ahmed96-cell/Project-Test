import React, { useState } from "react";
import { GrFormSchedule } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "../../index.css";

const Doctor_time_table = () => {
  const [docdata, setdocdata] = useState([
    {
      id: 0,
      name: "ahmed yahia",
      department: "dentist",
      date: "",
      days: [
        {
          active: false,
          day: "Saturday",
        },
        {
          active: false,
          day: "Sunday",
        },
        {
          active: false,
          day: "Monday",
        },
        {
          active: false,
          day: "Tuesday",
        },
        {
          active: false,
          day: "Wednesday",
        },
        {
          active: false,
          day: "Thursday",
        },
        {
          active: false,
          day: "Friday",
        },
      ],
      startTime: "",
      endTime: "",
    },
  ]);
  // const days = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  const onsub = (e) => {
    e.preventDefault();
  };

  const [checked, setchecked] = useState(true);

  const handleChange = (e) => {
    //clone
    const alldata = [...docdata];
    const hamoda = [...alldata[0].days];
    //change
    const i = hamoda.findIndex((s) => s.day === e.day);
    // console.log(i);
    hamoda[i] = { ...hamoda[i], active: !hamoda[i].active };
    alldata[0] = { ...alldata[0], days: hamoda };
    //setstate
    setdocdata(alldata);
    // setchecked(!checked);
    // setdocdata(!docdata[0].days[0].active);
  };

  const handleSubmit = () => {
    handleSubmit.bind();
  };

  return (
    <>
      <Container
        style={{
          backgroundColor: "#f1f5fc",
        }}
      >
        <div>
          <h1>ADD SCHEDULE</h1>
          <Form onSubmit={onsub} className="formm">
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control disabled type="text" value={docdata[0].name} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Doctor Department</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={docdata[0].department}
                />
              </Form.Group>
            </Row>
            {docdata[0].days.map((e, i) => (
              <Row key={i} className="col-12  mb-3">
                {/* {console.log(e)} */}
                <Form.Group
                  size="lg"
                  className=" d-flex align-items-center align-self-center"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Check
                    style={{
                      paddingLeft: "10.5em",
                      marginBottom: "-0.875rem",
                    }}
                    label={e.day}
                    onChange={() => handleChange(e)}
                    type="switch"
                    id={`custom-switch + ${e.day}`}
                    name="hamoda"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Start time</Form.Label>
                  {e.active ? (
                    <Form.Control name="hamoda" type="time" />
                  ) : (
                    <Form.Control type="time" disabled />
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>End time</Form.Label>
                  {e.active ? (
                    <Form.Control type="time" />
                  ) : (
                    <Form.Control type="time" disabled />
                  )}
                </Form.Group>
              </Row>
            ))}

            {/*  <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="formGridEmail"
              >
                <Form.Check
                  style={{
                    paddingLeft: "10.5em",
                    marginBottom: "-0.875rem",
                  }}
                  type="switch"
                  id="custom-switch2"
                  label="Sunday"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Start time</Form.Label>
                <Form.Control disabled type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>End time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="formGridEmail"
              >
                <Form.Check
                  style={{
                    paddingLeft: "10.5em",
                    marginBottom: "-0.875rem",
                  }}
                  type="switch"
                  id="custom-switch3"
                  label="Monday"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Start time</Form.Label>
                <Form.Control disabled type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>End time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="formGridEmail"
              >
                <Form.Check
                  style={{
                    paddingLeft: "10.5em",
                    marginBottom: "-0.875rem",
                  }}
                  type="switch"
                  id="custom-switch4"
                  label="Tuesday"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Start time</Form.Label>
                <Form.Control disabled type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>End time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="formGridEmail"
              >
                <Form.Check
                  style={{
                    paddingLeft: "10.5em",
                    marginBottom: "-0.875rem",
                  }}
                  type="switch"
                  id="custom-switch5"
                  label="Wednesday"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Start time</Form.Label>
                <Form.Control disabled type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>End time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="formGridEmail"
              >
                <Form.Check
                  style={{
                    paddingLeft: "10.5em",
                    marginBottom: "-0.875rem",
                  }}
                  type="switch"
                  id="custom-switch6"
                  label="Thursday"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Start time</Form.Label>
                <Form.Control disabled type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>End time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="formGridEmail"
              >
                <Form.Check
                  style={{
                    paddingLeft: "10.5em",
                    marginBottom: "-0.875rem",
                  }}
                  type="switch"
                  id="custom-switch7"
                  label="Friday"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Start time</Form.Label>
                <Form.Control disabled type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>End time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row> */}
            <Row
              className="col-6
              mb-3"
            >
              <Form.Group as={Col}>
                <Button className="mb" variant="primary" type="submit">
                  Save
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </Container>
      ;
    </>
  );
};

export default Doctor_time_table;

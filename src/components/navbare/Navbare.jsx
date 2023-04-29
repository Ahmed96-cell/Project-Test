import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import "../../index.css";
const Navbare = ({ isOpen, toggle }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="ccc">
        <div onClick={toggle}>
          {isOpen ? (
            <TbLayoutSidebarLeftCollapse style={{ fontSize: "50px" }} />
          ) : (
            <TbLayoutSidebarLeftExpand style={{ fontSize: "50px" }} />
          )}
        </div>

        <Form>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>

        <CgProfile style={{ fontSize: "50px" }} />

        <Button variant="outline-success">Logout</Button>
      </Container>
    </Navbar>
  );
};

export default Navbare;

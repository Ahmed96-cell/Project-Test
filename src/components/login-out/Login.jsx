import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SinUp = () => {
  return (
    <React.Fragment>
      <Container className="contain">
        <div className="login">
          <form className="login-form">
            <h2>Login</h2>

            <Row>
              <Col className="input">
                {/* <label >Email</label> */}
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="user name"></input>
              </Col>
            </Row>
            <Row>
              <Col className="input">
                {/* <label >Password</label> */}
                <i className="fa-solid fa-lock"></i>

                <input type="password" placeholder="password"></input>
              </Col>
            </Row>

            <button className="btn">SinUp</button>
          </form>
        </div>

        <div className="singup">
          <form className="sinup-form">
            <h2>SinUp</h2>

            <Row>
              <Col className="input">
                {/* <label className="input">Email</label> */}
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="user name" />
              </Col>
            </Row>
            <Row>
              <Col className="input">
                {/* <label className="input">Email</label> */}
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="E-mail" />
              </Col>
            </Row>
            <Row>
              <Col className="input">
                {/* <label className="input">Password</label> */}
                <i className="fa-solid fa-lock"></i>

                <input type="password" placeholder="password" />
              </Col>
            </Row>

            <button className="btn">SinUp</button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default SinUp;

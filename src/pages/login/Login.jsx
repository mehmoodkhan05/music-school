import { useEffect, useState } from "react";
import "./login.css";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="login-page">
        <Container>
          <p className="blue fs-34 lh-35 text-center">
            Ready to go? Let’s Get Started!
          </p>

          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="login-form"
          >
            <Row className="justify-content-center">
              <Col lg={5} md={8} xs={10}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Email"
                  className="mb-3 floating-label"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="Your Email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please type your email.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
                <Form.Group controlId="validationCustom02">
                  <Form.Control
                    required
                    type="password"
                    placeholder="********"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please type your password.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <div className="login_page-btn mt-5 text-center">
              <div className="signIn-btn">
                <Button
                  variant=""
                  type="submit"
                  className="button rd-50 btn-w-216 fw-600"
                >
                  Sign in
                </Button>
              </div>

              <div className="signUp-btn mt-3">
                <Link to="/signUp">
                  <Button
                    variant=""
                    type="submit"
                    className="fw-500 fs-20 rd-50 btn-w-216"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Login;

import { useEffect, useState } from "react";
import "./registration.css";
import { Col, Form, InputGroup, Row, Container } from "react-bootstrap";

const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [validated, setValidated] = useState(false);

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
      <div className="registration-page">
        <Container>
          <p className="fs-34 fw-500 red text-center">Get Registered</p>

          {/* CREATE LOGIN FORM */}
          <div className="create_login-form">
            <p className="reg-heading text-center pt-5 blue">
              Create Your Login
            </p>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="mt-4 user_reg-form"
            >
              <Row className="justify-content-center">
                <Col lg={5} md={8} xs={10}>
                  <Form.Group controlId="validationCustom01">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      className="p-3 mb-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="validationCustom02">
                    <Form.Control
                      required
                      type="password"
                      placeholder="Create Password"
                      className="p-3 mb-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a password.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        aria-describedby="inputGroupPrepend"
                        required
                        className="p-3 mb-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please confirm your password.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Text id="passwordHelpBlock" muted className="d-flex text-center opacity-50 fs-12">
                    Your password needs to be 8 characters or more, including an uppercase letter,
                    a lowercase letter, a number, and a symbol
                  </Form.Text>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Registration;

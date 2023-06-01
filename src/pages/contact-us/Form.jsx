import { Button, Col, Form, Row } from "react-bootstrap";
import "./contactUs.css";
import { useState } from "react";

const ContactForm = () => {
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
            <Form className="form mt-lg-5" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-2">
                    <Form.Group as={Col} md="6" controlId="validationCustom01" className="mb-2 mb-md-0">
                        <Form.Control required type="text" placeholder="First name" className="p-3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Control required type="text" placeholder="Last name" className="p-3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Control type="email" placeholder="Email Address" required className="p-3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Control type="number" placeholder="Phone Number" required className="p-3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone number.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                        <Form.Control as="textarea" placeholder="How can we help you?" required rows={4} className="p-3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid message.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="form-button text-center pt-5">
                    <Button variant="" type="submit" className="button btn-w-216 rd-50">
                        Send message
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default ContactForm;

import { Col, Container, Row } from "react-bootstrap";
import "./contact.css";
import ContactForm from "./ContactForm";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section className="contact-section">
                <Container className="contact-container">
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="headings">
                                <p className="section-subHeading lh-30">Get in Touch</p>
                                <p className="section-heading fs-62">With Us!</p>
                            </div>

                            <div className="contact-info fw-500 lh-18">
                                <p className="mb-0">
                                    <a href="#">1111C Bank St. Ottawa, Ontario</a>
                                </p>

                                <p className="mb-0">
                                    <a href="#">(613) 730-2887</a>
                                </p>

                                <p className="text-break">
                                    <a href="#">sunnysidemusicschool@gmail.com</a>
                                </p>
                            </div>

                            <p className="text-color pt-2">Follow Us</p>
                            <div className="contact-icons pt-2">
                                <a href="#">
                                    <BsFacebook className="icons" />
                                </a>

                                <a href="#">
                                    <BsTwitter className="icons ms-2" />
                                </a>

                                <a href="#">
                                    <FaLinkedinIn className="icons ms-2" />
                                </a>

                                <a href="#">
                                    <BsPinterest className="icons ms-2" />
                                </a>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;

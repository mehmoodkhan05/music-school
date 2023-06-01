import { Col, Container, Row } from "react-bootstrap";
import "./contactUs.css";
import Form from "./Form";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contact-page">
        <div className="overlay-image">
          <img
            src="/src/assets/images/contact-bg.jpg"
            alt=""
            className="img-fluid"
          />
        </div>

        <Container>
          <p className="section-heading white text-center">Contact Us</p>
        </Container>
      </div>

      <div className="contact-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} xs={12}>
              <p className="fs-34 lh-30 blue text-center">
                Get in Touch With Us!
              </p>
              <p className="text-center pt-4">
                Use the form below to contact us regarding information on Music
                Lessons and retail.
              </p>

              <Form />
            </Col>
          </Row>
        </Container>

        <div className="contact_page-info">
          <Container>
            <Row className="justify-content-center">
              <Col xl={4} lg={5} md={6} xs={12} className="text-center text-md-start">
                <p className="fs-24 blue">Contact Information</p>

                <p className="fw-500 lh-18 pt-3 mb-4 text-break">
                  Visit Us: 1111C Bank St. Ottawa, Ontario
                </p>

                <p className="fw-500 lh-18 mb-4">Call Us: (613) 730-2887</p>
                <p className="fw-500 lh-18 mb-4 text-break">
                  Email: sunnysidemusicschool@gmail.com
                </p>

                <p className="blue fw-400 pt-3">Follow Us</p>

                <div className="info-icons pt-2">
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

              <Col xl={4} lg={5} md={6} xs={12} className="text-center text-md-start pt-5 pt-md-0">
                <p className="fs-24 blue">Hours of Operation</p>

                <p className="fw-500 lh-18 pt-3 mb-4">
                  Monday-Friday 3:00pm-9:00pm
                </p>

                <p className="fw-500 lh-18 mb-4">Saturday 9:00am-6:00pm</p>

                <p className="fw-500 lh-18 mb-4">Sunday Closed all day</p>

                <p className="fw-500 lh-18">
                  Ask a teacher or admin for holidays
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="map-section">
        <Container>
          <Row>
            <Col xs={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13108.730864113966!2d72.36662969999999!3d34.776175249999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1685617497665!5m2!1sen!2s"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;

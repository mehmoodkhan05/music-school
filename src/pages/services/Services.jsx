import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./services.css";
import service from "../../data/service";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="services-page">
        <div className="overlay-image">
          <img src="/src/assets/images/services-bg.jpg" alt="" />
        </div>
        <Container>
          <p className="section-heading text-center white">Services</p>

          <div className="service-btn text-center">
            <Button variant="" className="button btn-w-216">
              Sign up Today
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <div className="overlay-containers">
          <div className="red-overlay">
            <img
              src="/src/assets/services/red-overlay.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="first-note">
              <p className="fw-300 fs-60 lh-70 white">The First Note</p>

              <p className="text-body white">
                We thrive on ensuring the student gets the most out of their
                lesson. From the very first note the student plays, our skilled
                teachers will tailor their lessons to fit their personal
                interests.
              </p>
            </div>
          </div>

          <div className="blue-overlay">
            <img
              src="/src/assets/services/blue-overlay.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="teach-harmony">
              <p className="fw-300 fs-60 lh-70 white">Teach In Harmony</p>

              <p className="text-body white">
                Students learn best when they are comfortable with a teacher
                they connect to both personally and musically. We have assembled
                a diverse, understanding, and welcoming group of teachers. If
                you feel as though you or your child would benefit from lessons
                with another teacher, or different approach to teaching, let us
                know.
              </p>
            </div>
          </div>

          <div className="orange-overlay">
            <img
              src="/src/assets/services/yellow-overlay.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="future-sounds">
              <p className="fw-300 fs-60 lh-70 white">The Future Sounds Good</p>

              <p className="text-body white">
                While music lessons at this location has a rich history,
                Sunnyside has redirected our efforts and are swiftly emerging as
                music school that continues to grow in numbers, while
                maintaining a small community feel. We are continually creating
                interesting classes, workshops, and ensuring that we engage
                talented teachers to lead the way. Don’t miss out on our
                enrollment spikes (September and January), as space is taken
                quickly
              </p>
            </div>
          </div>
        </div>

        <div className="section-instructions">
          <p className="blue text-center fs-48 lh-50">Private Instructions</p>
          <div className="cards_private-instrustion">
            <Row className="justify-content-center">
              {service.map((services) => {
                let customClass = "";
                if (services.id === 2) {
                  customClass = "mt-4 mt-sm-0"
                }
                return (
                  <Col xl={3} lg={4} md={5} sm={6} xs={9} key={services.id}>
                    <Card className={`h-100 shadow-lg ${customClass}`}>
                      <Card.Img
                        variant="top"
                        src={services.image}
                        className="service_card-img p-1"
                      />
                      <Card.Body>
                        <Card.Title className="text-center pt-4">
                          {services.title}
                        </Card.Title>
                        <Card.Text className="text-center pt-2">
                          {services.description}
                        </Card.Text>
                        <Card.Text className="list-items text-center pt-4 fw-500">
                          <ul>
                            <li>{services.time1}</li>
                            <li>{services.time2}</li>
                            <li>{services.time3}</li>
                          </ul>
                        </Card.Text>
                        <Card.Text className="text-center pt-4 pb-4">
                          <Button
                            variant=""
                            className="btn-w-168 service_card-btn fw-600"
                          >
                            {services.btn}
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Container>

      <div className="rehearsal-space">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="bottom-content">
                <p className="fw-300 fs-60 lh-70 text-center white">
                  Nee a Rehearsal Space?
                </p>

                <p className="fs-24 lh-20 text-center white pt-2">
                  Need a rehearsal space? We have drums, pianos and amps if
                  needed.
                </p>
                <p className="fw-600 fs-24 lh-20 text-center white">
                  Rehearsal time is $20.00 for per hour
                </p>
                <p className="fs-24 lh-20 text-center white">
                  Please contact the school beforehand, to make sure the
                  appropriate room is booked for you.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="cancellation">
              <p className="fw-300 fs-60 lh-70 red text-center">
                Cancellation Policy
              </p>

              <p className="text-center">
                Private lessons (and makeup lessons) cancelled by the student can be
                made up provided that a minimum of 7 days notice is received by the
                instructor or school. If a makeup lesson cannot be scheduled at a
                mutually convenient time, a credit is issued for that lesson.)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;

import { Button, Col, Container, Row } from "react-bootstrap";
import "./news.css";
import { useEffect } from "react";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="news-page">
        <div className="overlay-image">
          <img
            src="/src/assets/images/news-bg.jpg"
            alt=""
            className="img-fluid"
          />
        </div>

        <Container>
          <p className="section-heading white text-center">
            News
          </p>

          <div className="news-btn text-center">
            <Button variant="" className="button btn-w-216 rd-50">
              Sign up today
            </Button>
          </div>
        </Container>
      </div>

      <div className="news-containers">
        <Container>
          <Row>
            <Col lg={6} className="pe-0 bg-color">
              <div className="message-side">
                <h2>welcome</h2>
                <h1>welcome</h1>
                <h1>welcome</h1>
                <h1>welcome</h1>
              </div>
            </Col>

            <Col lg={6} className="ps-0">
              <div className="img-side">
                <img src="/src/assets/services/red-overlay.jpg" alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default News;

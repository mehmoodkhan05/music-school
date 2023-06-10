import { Button, Col, Container, Row } from "react-bootstrap";
import "./news.css";
import { useEffect } from "react";
import config from "../../config/index";

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
          <p className="section-heading white text-center">News</p>
          <div className="news-btn text-center">
            <Button variant="" className="button btn-w-216 rd-50">
              Sign up today
            </Button>
          </div>
        </Container>
      </div>

      <div className="news-containers pt-5">
        <Container>
          <Row>
            <Col lg={6} className="pe-0 bg-color">
              <div className="message-side">
                <div className="d-flex">
                  <img
                    src={config.logo}
                    alt=""
                    className="img-fluid bg-white mt-2 ms-2"
                  />
                  <div className="d-block align-items-center">
                    <p className="fs-10 mt-5">
                      <span className="fw-500 fs-14">
                        Sunnyside Music School
                      </span>
                      &nbsp; updated their cover photo
                    </p>
                    <p className="fst-italic fs-10">2 years 1 month ago</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} className="ps-0">
              <div className="img-side">
                <img
                  src="/src/assets/news/news1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default News;

import { Card, Col, Row } from "react-bootstrap"
import "./features.css"
import feature from "../../../data/feature"
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";

const FeaturesCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "85px",
                },
            },

            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "65px",
                },
            },

            {
                breakpoint: 485,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "55px",
                },
            },

            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "45px",
                },
            },

            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "30px",
                },
            },

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "20px",
                },
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                },
            },

            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <>
            <Row>
                <Slider {...settings} centerMode={true}>
                    {feature.map((featured) => {
                        return (
                            <div className=" slick-next-content d-flex justify-content-center" key={featured.id}>
                                <Col lg={10}>
                                    <Card className="mt-5 h-100 feature-card">
                                        <Card.Img
                                            fluid="true"
                                            variant="top"
                                            src={featured.image}
                                            className="feature-image"
                                        />
                                        <Card.Body className="text-center">
                                            <Card.Title className="text-heading yellow pt-4 mb-0">
                                                {featured.title}
                                            </Card.Title>
                                            <Card.Text className="feature-desc pt-3">
                                                {featured.description}
                                            </Card.Text>
                                            <Card.Text className="social-icons">
                                                <a href="#">
                                                    <BsFacebook className="feature-icons" />
                                                </a>
                                                <a href="#">
                                                    <BsTwitter className="feature-icons ms-2" />
                                                </a>
                                                <a href="#">
                                                    <FaLinkedinIn className="feature-icons ms-2" />
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        )
                    })}
                </Slider>
            </Row >
        </>
    )
}

export default FeaturesCard
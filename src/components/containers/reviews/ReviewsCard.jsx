import { Card, Col, Row } from "react-bootstrap"
import "./reviews.css"
import review from "../../../data/review"
import { RiStarSFill } from "react-icons/ri";
import Slider from "react-slick";

const ReviewsCard = () => {
    const settings = {
        centerPadding: "0px",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
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
                <div className="slick-slider">
                    <Slider {...settings} centerMode={true}>
                        {review.map((reviews) => {
                            return (
                                <div className="d-flex justify-content-center slick-next-content" key={reviews.id}>
                                    <Col lg={10} md={12}>
                                        <Card className="mt-5 h-100 reviews-card">
                                            <Card.Body>
                                                <div className="reviews-star text-center">
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                </div>
                                                <Card.Text className="review-desc pt-3 text-center">
                                                    {reviews.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-center card-footer">
                                                <Card.Img
                                                    fluid="true"
                                                    variant="top"
                                                    src={reviews.image}
                                                    className="review-image"
                                                />
                                                <Card.Title className="mb-0 white">
                                                    {reviews.title}
                                                </Card.Title>
                                                <Card.Title className="white">
                                                    {reviews.subtitle}
                                                </Card.Title>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </Row>
        </>
    )
}

export default ReviewsCard
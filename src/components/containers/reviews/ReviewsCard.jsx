import { Card, Col, Row } from "react-bootstrap"
import "./reviews.css"
import review from "../../../data/review"
import { RiStarSFill } from "react-icons/ri";
import Slider from "react-slick";

const ReviewsCard = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
      };

    return (
        <>
            <Row>
                <div className="slick-slider">
                    <Slider {...settings}>
                        {review.map((reviews) => {
                            return (
                                <div className="d-flex justify-content-center slick-next-content" key={reviews.id}>
                                    <Col lg={10} md={12} className="d-flex">
                                        <Card className="mt-5 h-100 reviews-card">
                                            <Card.Body>
                                                <div className="reviews-star text-center">
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                    <RiStarSFill className="stars" />
                                                </div>
                                                <Card.Text className="review-desc pt-3 pt-lg-5 text-center">
                                                    {reviews.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-center card-footer postition-relative">
                                                <Card.Img
                                                    fluid="true"
                                                    variant="top"
                                                    src={reviews.image}
                                                    className="review-image position-absolute"
                                                />
                                                <Card.Title className="mb-0 white pt-3">
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
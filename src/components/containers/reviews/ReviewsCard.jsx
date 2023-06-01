import { Card, Col, Row } from "react-bootstrap"
import "./reviews.css"
import review from "../../../data/review"
import { RiStarSFill } from "react-icons/ri";

const ReviewsCard = () => {
    return (
        <>
            <Row>
                <div id="customers-reviews" className="owl-carousel">
                    {review.map((reviews) => {
                        return (
                            <div className="item" key={reviews.id}>
                                <Col xs={12}>
                                    {/* <div className="shadow-effect">
                                        <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div> */}
                                    <Card className="mt-5 h-100 reviews-card">
                                        <Card.Body>
                                            <div className="reviews-star text-center">
                                                <RiStarSFill className="stars" />
                                                <RiStarSFill className="stars" />
                                                <RiStarSFill className="stars" />
                                                <RiStarSFill className="stars" />
                                                <RiStarSFill className="stars" />
                                            </div>
                                            <Card.Text className="review-desc pt-3 pt-lg-4 text-center">
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
                </div >
            </Row >
        </>
    )
}
export default ReviewsCard

import { Row } from "react-bootstrap"
// import "./reviews.css"
// import review from "../../../data/review"
// import { RiStarSFill } from "react-icons/ri";

const ReviewsCard = () => {
    return (
        <>
            <Row>
                {/* <div className="owl-carousel owl-theme">
                    {review.map((reviews) => {
                        return (
                            <div className="item" key={reviews.id}>
                                <Col xs={12}>
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
                </div> */}

                <div className="owl-carousel">
                    <div className="item">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_bags.jpg" alt="" />
                            <div className="inner">
                                <a href="#">1 test</a>
                                <div className="textsb"> test    </div>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">2 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_bags.jpg" alt="" />
                            <div className="inner">
                                <a href="#">3 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">4 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_bags.jpg" alt="" />
                            <div className="inner">
                                <a href="#">5 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">6 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">7 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">8 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">9 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">10 test</a>
                            </div>
                        </a>
                    </div>
                    <div className="item black">
                        <a href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg" alt="" />
                            <div className="inner">
                                <a href="#">11 test</a>
                            </div>
                        </a>
                    </div>
                </div>
            </Row>
        </>
    )
}
export default ReviewsCard

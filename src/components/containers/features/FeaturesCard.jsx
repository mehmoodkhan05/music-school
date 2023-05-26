import { Card, Col, Container, Row } from "react-bootstrap"
import "./features.css"
import feature from "../../../data/feature"
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const FeaturesCard = () => {
    return (
        <>
            <div className="features-cards">
                <Container>
                    <Row>
                        {feature.map((featured) => {
                            return (
                                <Col md={4} key={featured}>
                                    <Card className="border-0 mt-5 h-100 feature-card">
                                        <Card.Img
                                            variant="top"
                                            src={featured.image}
                                            className="img-fluid feature-image"
                                        />
                                        <Card.Body className="text-center">
                                            <Card.Title className="text-heading yellow pt-4 mb-0">
                                                {featured.title}
                                            </Card.Title>
                                            <Card.Text className="feature-desc pt-3">
                                                {featured.description}
                                            </Card.Text>
                                            <Card.Text>
                                                <div className="social-icons">
                                                    <a href="#">
                                                        <BsFacebook className="feature-icons" />
                                                    </a>

                                                    <a href="#">
                                                        <BsTwitter className="feature-icons ms-2" />
                                                    </a>

                                                    <a href="#">
                                                        <FaLinkedinIn className="feature-icons ms-2" />
                                                    </a>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FeaturesCard
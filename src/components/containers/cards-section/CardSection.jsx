import SoundsCard from "./SoundsCard"
import "./cardsection.css"
import { Button, Col, Container, Row } from "react-bootstrap"

const CardSection = () => {
    return (
        <>
            <section className="cards-section">
                <Container>
                    <div className="card-component">
                        <SoundsCard />
                    </div>

                    <Row>
                        <Col lg={6}>
                            <div className="left-side">
                                <div className="heading">
                                    <p className="section-subHeading fs-96 fw-300">The Future</p>
                                    <p className="section-heading fs-62">Sounds Good!</p>
                                </div>

                                <div className="body">
                                    <p className="text-body">
                                        We are an emerging music school who continues to grow in numbers,
                                        while still having a small community feel. We are continually trying to find
                                        interesting classes, workshops, and ensuring that we are having talented
                                        teachers leading the way.
                                    </p>
                                </div>

                                <Button className="card_section-btn button mt-4 btn-w-120">
                                    More
                                </Button>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right-side">
                                <img src="/src/assets/images/saxophone.png" alt="" className="img-fluid saxophone-image" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CardSection
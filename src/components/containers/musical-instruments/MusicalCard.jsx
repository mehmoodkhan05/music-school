import { Card, Col, Container, Row } from "react-bootstrap";
import musicals from "../../../data/musicals";
import "./musical.css";

const MusicalCard = () => {
    return (
        <>
            <Container>
                <Row>
                    {musicals.map((musical) => {
                        let customClass = "";
                        if (musical.id === 5 || musical.id === 6 || musical.id === 7 || musical.id === 8) {
                            customClass = "custom-class py-5";
                        }
                        return (
                            <Col lg={3} md={4} key={musical.id}>
                                <Card
                                    className={`border-0 mt-5 shadow-sm card-items ${customClass}`}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={musical.icon}
                                        className="card-icons img-fluid"
                                    />
                                    <Card.Body className="text-center">
                                        <Card.Title className="text-heading pt-4">
                                            {musical.title}
                                        </Card.Title>
                                        <Card.Text className="card-descriptions pt-3">
                                            {musical.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default MusicalCard;

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import clients from "../../../data/clients";
import { BsArrowRight } from "react-icons/bs";
import "./cardsection.css";

const SoundsCard = () => {
    return (
        <>
            <Container>
                <Row>
                    {clients.map((client) => {
                        return (
                            <Col lg={4} key={client.id}>
                                <Card className="border-0 shadow-lg p-1 h-100 card-item">
                                    <Card.Img
                                        variant="top"
                                        src={client.image}
                                        className="card-image img-fluid"
                                    />
                                    <Card.Body className="text-center">
                                        <Card.Title className="pt-3 text-heading">
                                            {client.title}
                                        </Card.Title>
                                        <Card.Text className="pt-2">
                                            {client.description}
                                        </Card.Text>
                                        <Button variant="border-0" className="mt-3 card-butn">
                                            {client.btn}
                                            <BsArrowRight className="ms-2" />
                                        </Button>
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

export default SoundsCard;

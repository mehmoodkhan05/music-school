import { Button, Card, Col, Container, Row } from "react-bootstrap";
import clients from "../../../data/clients";
import { BsArrowRight } from "react-icons/bs";
import "./cardsection.css";

const Component = () => {
    return (
        <>
            <Container>
                <Row>
                    {clients.map((client) => {
                        return (
                            <Col lg={4} key={client.id}>
                                <Card className="mt-3 border-0 shadow-lg p-1">
                                    <Card.Img
                                        variant="top"
                                        src={client.image}
                                        className="card-image img-fluid"
                                    />
                                    <Card.Body>
                                        <Card.Title className="text-center pt-3">
                                            {client.title}
                                        </Card.Title>
                                        <Card.Text className="text-center pt-2">
                                            {client.description}
                                        </Card.Text>
                                        <Button variant="border-0" className="text-dark">
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

export default Component;

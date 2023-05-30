import { Button, Card, Col, Row } from "react-bootstrap";
import clients from "../../../data/clients";
import { BsArrowRight } from "react-icons/bs";
import "./cardsection.css";

const SoundsCard = () => {
    return (
        <>
            <Row className="justify-content-center">
                {clients.map((client) => {
                    let cardClass = "border-0 shadow-lg p-1 h-100 card-item";
                    if (client.id === 2) {
                        cardClass += " space"
                    }else if (client.id === 3) {
                      cardClass += " lessons";
                    }
                    return (
                        <Col lg={4} md={6} xs={12} key={client.id} className="d-flex justify-content-center">
                            <Card className={cardClass}>
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
        </>
    );
};

export default SoundsCard;

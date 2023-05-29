import { Card, Col, Row } from "react-bootstrap";
import musicals from "../../../data/musicals";
import "./musical.css";

const MusicalCard = () => {
    return (
        <>
            <Row>
                {musicals.map((musical) => {
                    let customClass = "";
                    if (musical.id === 1) {
                        customClass = "custom-class piano"
                    }else if (musical.id === 2) {
                        customClass = "custom-class guitar"
                    }else if (musical.id === 3) {
                        customClass = "custom-class voice";
                    }else if (musical.id === 4) {
                        customClass = "custom-class drums";
                    } else if (musical.id === 5) {
                        customClass = "custom-class violin";
                    } else if (musical.id === 6) {
                        customClass = "custom-class cello";
                    } else if (musical.id === 7) {
                        customClass = "custom-class double-bass";
                    } else if (musical.id === 8) {
                        customClass = "custom-class saxophone";
                    }
                    return (
                        <Col xl={3} lg={4} sm={6} key={musical.id}>
                            <Card
                                className={`border-0 mt-lg-5 shadow-lg card-items ${customClass}`}
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
        </>
    );
};

export default MusicalCard;

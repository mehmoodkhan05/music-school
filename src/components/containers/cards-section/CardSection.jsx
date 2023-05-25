import Component from "./Component"
import "./cardsection.css"
import { Container } from "react-bootstrap"

const CardSection = () => {
    return (
        <>
            <section className="cards-section">
                <Container>
                    <Component />
                </Container>
            </section>
        </>
    )
}

export default CardSection
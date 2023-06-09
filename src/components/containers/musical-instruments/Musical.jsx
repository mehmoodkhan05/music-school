import { Container } from "react-bootstrap"
import "./musical.css"
import MusicalCard from "./MusicalCard"

const Musical = () => {
    return (
        <>
            <section className="musical-section">
                <Container>
                    <p className="text-heading fs-48 text-center pb-5">Musical Instruments</p>
                    <MusicalCard />
                </Container>
            </section>
        </>
    )
}

export default Musical
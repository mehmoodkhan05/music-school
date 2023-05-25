import "./footer.css"
import { Container } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <p className="footer-tag text-center pt-5">
                    Copyright 2021 - Sunnyside Music School
                </p>
            </Container>
        </footer>
    )
}

export default Footer
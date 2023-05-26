import { Button, Container } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
    return (
        <>
            <section className="hero-section">
                <div className="overlay-image">
                    <img
                        src="/src/assets/images/hero-bg.jpg"
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <Container>
                    <div className="text-white">
                        <p className="section-heading text-center">Bringing Inspiration</p>
                        <p className="section-subHeading text-center fw-400">
                            Through our Love of Music
                        </p>
                    </div>

                    <div className="hero-btn text-center">
                        <Button variant="" className="button btn-w-216 p-2">Sign up Today!</Button>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Hero;

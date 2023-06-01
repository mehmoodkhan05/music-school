import { Button, Container } from "react-bootstrap";
import "./hero.css";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <Button variant="" className="button btn-w-216">Sign up Today!</Button>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Hero;

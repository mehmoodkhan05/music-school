import { Container } from "react-bootstrap";
import "./features.css";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <>
      <section className="features-section">
        <p className="text-heading orange text-center fs-48">
          Featured Teachers
        </p>
        <div className="image-bg">
          <Container>
            <FeaturesCard />
          </Container>
        </div>
      </section>
    </>
  );
};

export default Features;

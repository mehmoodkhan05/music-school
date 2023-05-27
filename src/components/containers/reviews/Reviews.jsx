import { Container } from "react-bootstrap"
import "./reviews.css"
import ReviewsCard from "./ReviewsCard"

const Reviews = () => {
  return (
    <>
        <section className="reviews-section">
            <Container>
                <p className="text-heading fs-48 text-center blue">Customer Reviews</p>
                <ReviewsCard />
            </Container>
        </section>
    </>
  )
}

export default Reviews
import { Button, Container } from "react-bootstrap"
import "./teachers.css"

const Teachers = () => {
  return (
    <>
      <div className="teachers-page">
        <div className="overlay-image">
          <img src="/src/assets/images/teachers-bg.jpg" alt="" className="img-fluid" />
        </div>
        <Container>
          <p className="section-heading white text-center">
            Teachers
          </p>

          <div className="teachers-btn text-center">
            <Button variant="" className="button btn-w-216 rd-50">
              Sign up today
            </Button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Teachers
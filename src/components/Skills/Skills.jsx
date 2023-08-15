import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow">
              <h2>Skills</h2>
              <p>
                My technical skills cover several technologies,<br></br> which
                allowed me to expand my skills in Fullstack development.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image2" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image3" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image5" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image5" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image6" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image7" />
                  <h5>Tailwind and Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  );
};

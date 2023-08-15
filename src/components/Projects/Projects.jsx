import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Rick and Morty App",
      description: "React App consuming its own API",
      imgUrl: projImg1,
    },
    {
      title: "Delivery App",
      description: "React App Delivery",
      imgUrl: projImg2,
    },
    {
      title: "Movie App",
      description: "React App with updated movies",
      imgUrl: projImg4,
    },
    {
      title: "Form JS",
      description: "A form with sending data to API in node",
      imgUrl: projImg3,
    },
    {
      title: "Login Screen",
      description: "It's a login screen a website",
      imgUrl: projImg5,
    },
    {
      title: "Register Screen",
      description: "It's a register screen a website",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    As a developer with experience in various technologies, I
                    have worked on projects that showcase my skills in
                    Javascript, React.js, Typescript, Next, Node.js, Express,
                    MySQL, PostgreSQL, Python, Tailwind CSS, and Bootstrap..
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          While my current showcase has temporarily found its
                          limit, rest assured that I'm actively working behind
                          the scenes to craft new projects that will soon
                          illuminate this space. Innovation knows no bounds, and
                          I'm eagerly shaping the future of what you'll see
                          here. Stay tuned for an exciting array of upcoming
                          projects that will breathe new life into this corner
                          of creativity.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          While my current showcase has temporarily found its
                          limit, rest assured that I'm actively working behind
                          the scenes to craft new projects that will soon
                          illuminate this space. Innovation knows no bounds, and
                          I'm eagerly shaping the future of what you'll see
                          here. Stay tuned for an exciting array of upcoming
                          projects that will breathe new life into this corner
                          of creativity.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};

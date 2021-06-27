import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mayaResume from '../../assets/mayaResume.pdf'

export default function Bio() {
  return (
    <section className="bio">
      <Container fluid className='justify-content-center'>
        <div className="bio-wrapper">
          <div className='bio-text'>
            <h3>Just me, Maya Santiago</h3>
            <p>When COVID upended my career in restaurant management, I found myself with time to comtemplate my life for the first time since becoming an adult.
              I decided to use the gift that fate had given me and make a complete 180 with my life.
              As I thought about job industries where I would be happy, one thing stuck in my mind. I wanted to create beautiful designs for people and have them be used around the world.
              That train of though brought me to web design, and here I am today, a full-stack web developer.
            </p>
            <div className="resume-container">
              <a href={mayaResume} taget="_blank" rel="nonreferrer" download="Maya Santiago">Download My Resume</a>
            </div>
            <Row className='skills-lists'>
              <Col className='list1 '>
                <h4>Front-end Proficiencies</h4>
                <ul className="skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Anime.js</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                </ul>
              </Col>
              <Col className='list2'>
                <h4>Back-end Proficiencies</h4>
                <ul className="skills">
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}
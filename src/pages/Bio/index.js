import { React } from 'react';
import { Container, Row, Col, Card, Accordion, useAccordionToggle } from 'react-bootstrap';
import mayaResume from '../../assets/mayaResume.pdf'

export default function Bio() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  return (
    <section className="bio">
      <Container fluid className='justify-content-center'>
        <div className="bio-wrapper">
          <div className='bio-text'>
            <h3>Just me, Maya Santiago</h3>
            <p>When COVID upended my career in restaurant management, I found myself comtemplating where I wanted to take my life.
              As I thought about job industries where I would be happy, one thing stuck in my mind. I wanted to create beautiful designs for people and have them be used around the world.
              That train of thought brought me to web design, and here I am today, a full-stack web developer.
            </p>
            <div className="dl-container">
              <a href={mayaResume} id='btn' target="_blank" rel="nonreferrer" download="Maya Santiago">Download My Resume</a>
            </div>
            <Row className='skills-lists'>
              <Col className='list1 '>
                <Accordion>    
                     <CustomToggle eventKey="0">Front-end Proficiencies</CustomToggle>              
                    <Accordion.Collapse eventKey="0">           
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
                    </Accordion.Collapse>     
                </Accordion>
              </Col>
              <Col className='list2'>
                <Accordion>
                      <CustomToggle eventKey="1">Back-end Proficiencies</CustomToggle>
                    <Accordion.Collapse eventKey="1">
                      <ul className="skills">
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                      </ul>        
                    </Accordion.Collapse>
                </Accordion>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}
import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';
export default function Contact() {

    return (
        <section className='contact'>
                <div className='contact-content'>
                    <h1 className='contact-heading'> Contact Me</h1>
            <Row>
                    <Col>
                        <div className='contact-email'>
                            <h3 className='contact-heading'> Send me an email</h3>
                            <a href="mailto:msatori.code@example.com" id='email'>msatori.code@gmail.com</a>
                        </div>
                    </Col>
                    <Col>
                        <div className='contact-icons'>
                            <h3 className='contact-heading'>Lets be friends</h3>
                            <a href="https://github.com/msatori" target="blank">
                                <FontAwesomeIcon icon={faGithub} className="fa-3x icon" />
                            </a>
                            <a href="www.linkedin.com/in/maya-santiago-58565a114" target="blank" >
                                <FontAwesomeIcon icon={faLinkedin} className="fa-3x icon" />
                            </a>
                        </div>
                    </Col>
            </Row>
                </div>
        </section>
    )
}
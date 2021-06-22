import { React } from 'react';
import { MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Contact() {

    return (
        <div className='contact'>
            <MDBContainer>
                <div className='contact-content'>
                    <h1 className='contact-heading'> Contact Me</h1>
                    <br />
                    <div className='contact-email'>
                        <h3 className='contact-heading'> Send me an email</h3>
                        <a href="mailto:msatori.code@example.com">msatori.code@gmail.com</a>
                    </div>
                    <br />
                    <div className='contact-icons'>
                        <h3 className='contact-heading'>Lets be friends</h3>
                        <a href="https://github.com/msatori" target="blank">
                        <FontAwesomeIcon icon={faGithub} className="fa-4x"/>
                    </a>
                    <a href="www.linkedin.com/in/maya-santiago-58565a114" target="blank">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-4x"/>
                    </a>
                    </div>
                  </div>]
            </MDBContainer>
        </div>
            )
}
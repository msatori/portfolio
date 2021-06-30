import { React, useState, onBlur, onFocus } from 'react';
import { Card, CardDeck, Row, Col, Container } from 'react-bootstrap';

export default function Resume() {

    const mobileBorder = {
        boxShadow: "0 0 6px rgba(172, 206, 221, 0.92),  0 0 30px rgba(50, 189, 199, 0.34),  0 0 12px rgba(16, 130, 165, 0.52),  0 0 21px rgba(207, 30, 242, 0.92),"
    }


    const [projects] = useState([

        {
            name: "Santa's Helper",
            role: "UI/Frontend Developer",
            description: "A collaborative project with Jessica Smith and Joanna Grosshans.",
            deployUrl: "https://stark-thicket-72427.herokuapp.com/",
            gitUrl: "https://github.com/jess-smith49/santas-helper"
        },
        {
            name: "Budgie the Tracker",
            role: "Backend Developer",
            description: "A simple expense tracking PWA that allows for online and offline usage. ",
            deployUrl: "https://stark-bayou-63490.herokuapp.com/",
            gitUrl: "https://github.com/msatori/budgie-the-tracker"
        },
        {
            name: "The Menu",
            role: "UI/Fronend Developer",
            description: "A collaborative project with Jessica Smith and Mai Yia Xiong",
            deployUrl: "https://jess-smith49.github.io/the-menu/",
            gitUrl: "https://github.com/jess-smith49/the-menu"
        },
        {
            name: "Dev Learn",
            role: "UI/Frontend",
            description: "Web developer quiz app",
            gitUrl: "https://github.com/jess-smith49/dev-tools",
            deployUrl: " https://murmuring-scrubland-26245.herokuapp.com/"
        },
    ]);
    return (
        <section className="resume">
            <Container fluid >
                <CardDeck className='justify-content-center'>
                    <Row>
                        {projects.map((project, i) => (
                            <Col xs={12} md={6} lg={6} xl={3} key={project.name}>
                                <Card>
                                    <div className='mask'>
                                        <div className='top'>
                                            <Card.Title>{project.name}</Card.Title>

                                                <Card.Img src={require(`../../assets/projects/${i}.png`).default}

                                                />
                                   
                                        </div>
                                        <div className='bottom'>
                                            <Card.Body>
                                                <Card.Text>
                                                    {project.description}
                                                    <br />
                                                    {project.role}
                                                </Card.Text>
                                                <a className='card-btn' href={project.deployUrl}>Visit Site</a>

                                                <br/>
                                                <a className='card-btn' href={project.gitUrl}>Visit GitHub Repository</a>
                                            </Card.Body>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))};
                    </Row>
                </CardDeck>
            </Container>
        </section>


    )
}
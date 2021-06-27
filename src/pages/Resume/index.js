import { React, useState } from 'react';
import { Card, CardDeck, Row, Col, Container } from 'react-bootstrap';

export default function Resume() {

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
                    <Row className='justify-content-center'>
                        {projects.map((project, i) => (
                            <Col xs={12} md={4} lg={4} xl={3} key={project.name}>
                                <Card>
                                    <div className='mask'>
                                        <div className='top'>
                                            <Card.Title>{project.name}</Card.Title>
                                            <Card.Img src={require(`../../assets/projects/${i}.png`).default} />
                                        </div>
                                        <div className='bottom'>
                                               <Card.Body>
                                                    <Card.Text>{project.description}</Card.Text>
                                                    <button className='card-btn' href={project.deployUrl}>Visit Site</button>
                                                    <button className='card-btn' href={project.gitUrl}>Visit GitHub Repository</button>
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
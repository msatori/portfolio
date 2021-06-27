import { React, useState } from 'react';
import { Card, CardDeck, Row, Col } from 'react-bootstrap';

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
            description: "A simple expense tracking PWA that allows for online and offline usage. Frontend design provided by UW Madison Extended Bootcamp",
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

            <CardDeck>
                <Row>
                    {projects.map((project, i) => (
                        <Col xs={12} md={6} lg={2}key={project.name}>
                            <Card  >
                                <div className='mask'>
                                    <Card.Img src={require(`../../assets/projects/${i}.png`).default} />
                                    <Card.Body>
                                        <Card.Text>{project.description}</Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    ))};
                </Row>
            </CardDeck>
        </section>


    )
}
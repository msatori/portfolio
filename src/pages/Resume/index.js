import { React, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardFooter, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBCardGroup } from 'mdb-react-ui-kit';

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

            {/* <CardGroup>
                    {projects.map((project, i) => (
                        <Card key={project.name} style={{ maxWidth: "18rem" }}>
                            <Card.Img src={require(`../../assets/images/projects/${i}.png`).default} style={{ maxWidth: "18rem" }} />
                            <Card.Body>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardGroup> */}
            <MDBCardGroup>
                {projects.map((project, i) => (
               
                        <MDBCard style={{ width: "35rem", margin: "15%" }}>
                                <MDBCardTitle>{project.name}</MDBCardTitle>
                            <MDBCardImage src={require(`../../assets/images/projects/${i}.png`).default} style={{ width: '22rem' }} waves />
                            <MDBCardBody>
                                <MDBCardText>
                                    {project.description}
                                </MDBCardText>
                                <MDBBtn href={project.deployUrl}>Visit Site</MDBBtn>
                                <br />
                                <MDBBtn href={project.gitUrl}>Visit GitHub Repository</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                  
                ))}
            </MDBCardGroup>


        </section>


    )
}
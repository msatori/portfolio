import { React, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBCardGroup } from 'mdb-react-ui-kit';

export default function Resume({ }) {

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
            <MDBCardGroup className='row-cols-1 row-cols-md-3 g-4'>
            {projects.map((project, i) => (
                <MDBCard key={project.name} style={{ maxWidth: "20rem" }}>
                    <MDBCardImage src={require(`../../assets/images/projects/${i}.png`).default} style={{ maxWidth: "20rem" }} />
                    <MDBCardBody>
                        <MDBCardText>{project.description}</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            ))}
            </MDBCardGroup>
        
        </section>

        
    )
}
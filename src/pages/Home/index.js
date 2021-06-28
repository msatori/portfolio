//utility imports
import { React } from 'react';
import {
    Link
} from "react-router-dom";

import { Fab } from '@material-ui/core'
//component imports
import Resume from '../Resume';
import Contact from '../Contact';
import Bio from '../Bio';
export default function HomePage() {
    const pages = [
        {
            name: 'About Me',
            link: '/about'
        },
        {
            name: 'My Work',
            link: '/resume'
        },
        {
            name: 'Contact Me',
            link: '/contact'
        }
    ];

    return (
        <div>
            <section className="hero d-flex justify-content-center">
                <div className="hero-wrapper">
                    <div className="hero-text t-bg">
                        <h1>Hello Universe,
                            <br />
                            I'm Maya.
                        </h1>
                        <p>A midwest-based web developer with a passion for design.</p>

                        <div className="arrow">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Bio />
            <br />
            <Resume />
            <br />
            <Contact />
        </div>
    )
}
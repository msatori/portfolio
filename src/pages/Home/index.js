import { React } from 'react';
import {
    Link
} from "react-router-dom";
import { MDBCol, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,
    MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../assets/images/splash-test.png';
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
        <section className="hero d-flex justify-content-center">
            <div className="hero-wrapper">
                <div className="hero-text t-bg">
                    <h1>Hello Universe,
                        <br />
                        I'm Maya.
                    </h1>
                    <p>A midwest-based web developer with a passion for design.</p>
                    <div className="hero-btns">
                        <ul>
                            {pages.map((page) => (
                                <li className="hero-btn" key={page.name}>
                                    <Link to={page.link} >{page.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}
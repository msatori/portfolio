import { React } from 'react';
import {
    Link
} from "react-router-dom";
import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';
import logo from '../../assets/images/splash-550.png';
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
                <div className="text-center">

                    <img className='img-fluid hero-img' src={logo} alt='Maya Santiago Logo' />

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
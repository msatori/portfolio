import { React } from 'react';
import {
    Link
} from "react-router-dom";
import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';
import logo from '../../assets/images/splash-850.png';
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
        <section className="hero">
            
                    <div className="text-center">
              
                        <img className='img-fluid' src={logo} alt='Maya Santiago Logo' />
                   
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
           
        </section>
    )
}
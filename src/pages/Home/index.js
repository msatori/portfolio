import { React } from 'react';
import bg from '../../assets/images/flower.png';

export default function HomePage() {
    return (
        <section className="hero">
            <div className="hero-wrapper"> 
                <div className="hero-text">
                    <img src={bg} />
                    <h1>Maya Santiago</h1>
                    <h3>Web Developer / UX Designer</h3>
                </div>
            </div>
        </section>
    )
}
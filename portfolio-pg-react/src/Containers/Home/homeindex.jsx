import React from "react";
import { useNavigate } from "react-router-dom";
import './homestyles.scss';

const HomePage = () => {

    const navigate = useNavigate();

    const handleNavToContact = () => {
        navigate('/contact');
    }

    return (
        <section id="home" className="home">
            <div className="home-text-wrapper">
            <h1>
                Hello, I'm Josue
                <br/>
                Full stack developer
            </h1>
            </div>
            <div className="home-contact-me">
                <button onClick={handleNavToContact}>Hire Me</button>
            </div>
        </section>
    )
}

export default HomePage;


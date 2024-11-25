import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';
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
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform : 'translateY(550px)'
            }}
            end={{
                transform : 'translateX(0px)'
            }}
            >
            <div className="home-contact-me">
                <button onClick={handleNavToContact}>Hire Me</button>
            </div>
            </Animate>
        </section>
    )
}

export default HomePage;


import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';
import Cta from '../components/sections/Cta';

const Home = () => {
    return (
        <>
            <Hero id="hero" className="illustration-section-01" />
            <About id="about" topDivider />
            <Technologies id="technologies" topDivider />
            <Projects
                id="projects"
                invertMobile
                topDivider
                imageFill
                className="illustration-section-02"
            />
            <Cta id="contact" />
        </>
    );
};

export default Home;

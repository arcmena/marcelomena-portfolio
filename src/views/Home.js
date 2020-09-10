import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Technologies from '../components/sections/Technologies';
// import Projects from '../components/sections/Projects';
import Cta from '../components/sections/Cta';

const Home = () => {
    return (
        <>
            <Hero id="hero" className="hero" />
            <About id="about" topDivider className="about" />
            <Technologies
                id="technologies"
                topDivider
                className="technologies"
            />
            {/* <Projects
                id="projects"
                invertMobile
                topDivider
                imageFill
                className="projects"
            /> */}
            <Cta id="contact" className="contact" />
        </>
    );
};

export default Home;

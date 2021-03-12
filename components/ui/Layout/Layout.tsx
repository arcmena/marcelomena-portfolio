import { Box } from '@chakra-ui/layout'

import { Header, Hero } from 'components/ui'
import AboutMe from 'components/AboutMe'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactMe from 'components/ContactMe'

const Layout = () => {
    return (
        <Box as="main">
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </Box>
    )
}

export default Layout

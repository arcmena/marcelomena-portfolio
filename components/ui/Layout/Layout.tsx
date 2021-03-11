import { Box } from '@chakra-ui/layout'

import { Header, Hero } from 'components/ui'
import AboutMe from 'components/AboutMe'
import Skills from 'components/Skills'
import Projects from 'components/Projects'

const Layout = () => {
    return (
        <Box as="main">
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
        </Box>
    )
}

export default Layout

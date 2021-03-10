import { Fragment } from 'react'

import { Header, Hero } from 'components/ui'
import AboutMe from 'components/AboutMe'
import Skills from 'components/Skills'

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
        </Fragment>
    )
}

export default Layout

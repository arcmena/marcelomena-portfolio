import { Fragment } from 'react'

import { Header, Hero } from 'components/ui'
import AboutMe from 'components/AboutMe'

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <AboutMe />
        </Fragment>
    )
}

export default Layout

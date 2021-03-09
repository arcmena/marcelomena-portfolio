import { Fragment } from 'react'
import Head from 'next/head'

import { Header, Hero } from 'components/ui'

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Marcelo Mena</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
        </Fragment>
    )
}

export default Home

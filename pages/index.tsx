import { Fragment } from 'react'
import Head from 'next/head'

import { Layout } from 'components/ui'

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Marcelo Mena | Front-End Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout />
        </Fragment>
    )
}

export default Home

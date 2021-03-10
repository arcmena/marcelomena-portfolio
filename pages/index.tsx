import { Fragment } from 'react'
import Head from 'next/head'

import { Layout } from 'components/ui'

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Marcelo Mena</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout />
        </Fragment>
    )
}

export default Home

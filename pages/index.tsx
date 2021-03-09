import { Fragment } from 'react'
import Head from 'next/head'
import { Container, Flex, Heading, Link } from '@chakra-ui/layout'
import { Hero } from '../components/ui'

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Marcelo Mena</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />
        </Fragment>
    )
}

export default Home

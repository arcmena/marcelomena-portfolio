import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <Flex
            height="100vh"
            justifyContent="center"
            alignItems="center"
            background="gray.900"
            color="gray.200"
        >
            <Head>
                <title>Marcelo Mena</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container textAlign="center" maxW="container.xl">
                <Flex justifyContent="center">
                    <Heading size="3xl" as="h1" letterSpacing="wider">
                        Welcome to my
                    </Heading>
                    <Heading
                        size="3xl"
                        as="h1"
                        color="red.100"
                        mx="4"
                        letterSpacing="wider"
                    >
                        portfolio
                    </Heading>
                    <Heading size="3xl" as="h1" letterSpacing="wider">
                        !
                    </Heading>
                </Flex>

                <Heading size="lg" as="p" mt="4" letterSpacing="wider">
                    This is where I'll introduce myself!
                </Heading>
            </Container>
        </Flex>
    )
}

export default Home

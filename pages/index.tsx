import { Container, Flex, Heading, Link, Text } from '@chakra-ui/layout'

import Head from 'next/head'

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
                <Heading letterSpacing="wider" size="3xl" as="h1">
                    Welcome to my <Link color="red.100">portfolio</Link>!
                </Heading>

                <Heading size="lg" as="p" mt="4" letterSpacing="wider">
                    This is where I'll introduce myself!
                </Heading>
            </Container>
        </Flex>
    )
}

export default Home

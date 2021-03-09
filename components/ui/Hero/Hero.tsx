import { Container, Flex, Heading, Link } from '@chakra-ui/layout'

import { GithubIcon, LinkedInIcon } from '../Icons'

const Hero = () => {
    return (
        <Flex
            height="100vh"
            justifyContent="center"
            alignItems="center"
            background="black.100"
            color="gray.200"
            bgImage="url('/backgrounds/hero-bg.svg')"
            bgPosition="bottom right"
            bgRepeat="no-repeat"
        >
            <Container textAlign="center" maxW="container.xl">
                <Heading letterSpacing="wider" size="4xl" as="h1">
                    <Link color="red.100">M</Link>arcelo{' '}
                    <Link color="red.100">M</Link>ena
                </Heading>

                <Heading size="xl" as="p" m="4" letterSpacing="widest">
                    Front-End developer
                </Heading>

                <Container>
                    <GithubIcon
                        viewBox="0 0 50 50"
                        w={45}
                        h={45}
                        color="gray.200"
                        transition="all 0.3s ease"
                        cursor="pointer"
                        _hover={{ color: 'red.100' }}
                        mr="3"
                    />
                    <LinkedInIcon
                        viewBox="0 0 50 50"
                        w={45}
                        h={45}
                        color="gray.200"
                        transition="all 0.3s ease"
                        cursor="pointer"
                        _hover={{ color: 'red.100' }}
                        ml="3"
                    />
                </Container>
            </Container>
        </Flex>
    )
}

export default Hero

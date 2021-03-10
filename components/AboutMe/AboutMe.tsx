import { Box, Heading, Link, Text } from '@chakra-ui/layout'
import Section from 'components/ui/Section'

const sectionText =
    "My name is Marcelo, I'm 20 years old and I'm a Front-End Developer. Been in the area for around 2 years, first started with Java in 2018 and worked my way into web development with JavaScript in 2019. Started working in the area as Software Developer in a financial company on their .NET / Javascript application. Lately have been working as Front-End Developer on a health and care company, developing with React, Node and Django. On my free time been working on personal projects and some freelancing jobs."

const AboutMe = () => {
    return (
        <Section
            id="aboutme"
            bg="white"
            bgImage="url('/backgrounds/section-bg-1.svg')"
            bgPosition="bottom left"
            bgSize="contain"
            bgRepeat="no-repeat"
            px="6"
        >
            <Box
                flexDirection="column"
                maxW="3xl"
                textAlign="center"
                mx="auto"
                py="12"
            >
                <Heading color="gray.900">
                    About <Link color="red.100">m</Link>e
                </Heading>

                <Text mt="4" fontSize="lg">
                    {sectionText}
                </Text>
            </Box>
        </Section>
    )
}

export default AboutMe

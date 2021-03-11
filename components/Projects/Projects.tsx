import { Box, Heading, Link, Stack, Text } from '@chakra-ui/layout'

import Section from 'components/ui/Section'

const sectionText = 'Some of the projects I’ve developed for practice.'

const Projects = () => {
    return (
        <Section
            id="skills"
            bg="white"
            px="6"
            bgImage="url('/backgrounds/section-bg-2.svg')"
            bgPosition="top right"
            bgSize="contain"
            bgRepeat="no-repeat"
        >
            <Box
                flexDirection="column"
                maxW="6xl"
                textAlign="center"
                mx="auto"
                py="12"
            >
                <Heading color="gray.900">
                    <Link color="red.100">P</Link>rojects
                </Heading>

                <Text mt="4" fontSize="lg">
                    {sectionText}
                </Text>

                <Stack
                    spacing={4}
                    direction={['column', 'column', 'column', 'row']}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="6"
                >
                    Projects here
                </Stack>
            </Box>
        </Section>
    )
}

export default Projects

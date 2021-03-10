import { Box, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import SkillItem from 'components/SkillItem'
import Section from 'components/ui/Section'

const sectionText =
    'Some of the skills I’ve been practicing and mastering through time.'

const skills = [
    {
        name: 'Javascript',
        desc:
            'A powerfull scripting language, both on client-side and server-side.',
        pattern: "url('/backgrounds/pattern-1.svg')"
    },
    {
        name: 'React',
        desc: 'A JavaScript library for building dynamic user interfaces.',
        pattern: "url('/backgrounds/pattern-2.svg')"
    },
    {
        name: 'Node',
        desc:
            'A JavaScript runtime designed to build scalable web applications.',
        pattern: "url('/backgrounds/pattern-3.svg')"
    }
]

const AboutMe = () => {
    return (
        <Section id="skills" bg="white" px="6">
            <Box
                flexDirection="column"
                maxW="6xl"
                textAlign="center"
                mx="auto"
                py="12"
            >
                <Heading color="gray.900">
                    <Link color="red.100">S</Link>kills
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
                    {skills.map(({ name, desc, pattern }) => (
                        <SkillItem name={name} desc={desc} pattern={pattern} />
                    ))}
                </Stack>
            </Box>
        </Section>
    )
}

export default AboutMe

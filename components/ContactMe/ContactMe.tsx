import { Box, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import ContactItem from 'components/ContactItem'

import Section from 'components/ui/Section'

const Contacts = [
    {
        name: 'Github'
    },
    {
        name: 'LinkedIn'
    },
    {
        name: 'Gmail'
    },
    {
        name: 'Instagram'
    }
]

const ContactMe = () => {
    return (
        <Section id="contact" mb={[0, 0, 0, 12]}>
            <Box
                flexDirection="column"
                bgColor="black.100"
                w="100%"
                maxW="5xl"
                textAlign="center"
                mx="auto"
                py="12"
                bgImage="url('/backgrounds/section-bg-3.svg')"
                bgRepeat="no-repeat"
                bgPosition="bottom left"
            >
                <Heading color="gray.200">
                    <Link color="red.100">C</Link>ontact{' '}
                    <Link color="red.100">M</Link>e
                </Heading>

                <Box
                    direction="row"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    mt="6"
                >
                    {Contacts.map(({ name }) => (
                        <ContactItem name={name} />
                    ))}
                </Box>
            </Box>
        </Section>
    )
}

export default ContactMe

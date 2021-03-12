import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading } from '@chakra-ui/layout'

type ProjectProps = {
    name: string
    image: string
}

const Project = ({ name, image }: ProjectProps) => {
    return (
        <Flex
            direction="column"
            maxW="315px"
            h="315px"
            cursor="pointer"
            transition="all 0.3s ease"
            filter="saturate(0)"
            _hover={{
                shadow: 'xl',
                filter: 'saturate(1)'
            }}
        >
            <Image
                src={image}
                alt={name}
                style={{
                    boxShadow: 'inset 0px -5px 6px 0px rgba(0,0,0,0.25);'
                }}
            />
            <Box
                py="2"
                h="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Heading as="h4" fontSize="2xl">
                    {name}
                </Heading>
            </Box>
        </Flex>
    )
}

export default Project

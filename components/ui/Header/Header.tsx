import { Box, Flex, HStack, Link } from '@chakra-ui/layout'

import NavItems from 'utils/NavItems'

const Header = () => {
    return (
        <Box
            bg="rgba(19, 19, 19, 0.12)"
            minW="100%"
            display="flex"
            justifyContent="flex-end"
            position="fixed"
            top="0"
        >
            <HStack
                as="div"
                spacing={10}
                listStyleType="none"
                color="gray.200"
                fontSize="lg"
                px="12"
                py="10"
                transition="color 0.2s ease"
            >
                {NavItems.map(({ name, href }) => (
                    <span key={name}>
                        <Link
                            href={href}
                            _hover={{
                                textDecoration: 'none',
                                color: 'red.100'
                            }}
                        >
                            {name}
                        </Link>
                    </span>
                ))}
            </HStack>
        </Box>
    )
}

export default Header

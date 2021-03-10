import { Box, Flex, HStack, Link } from '@chakra-ui/layout'

import NavItems from 'utils/NavItems'

const Header = () => {
    return (
        <Box
            minW="100%"
            display="flex"
            justifyContent="flex-end"
            position="fixed"
            top="0"
            style={{ backdropFilter: 'saturate(180%) blur(14px)' }}
        >
            <HStack
                as="div"
                spacing={10}
                listStyleType="none"
                color="gray.200"
                fontSize="lg"
                px="12"
                py="6"
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

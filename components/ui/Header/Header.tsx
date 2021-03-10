import { Flex, HStack, Link } from '@chakra-ui/layout'

import NavItems from 'utils/NavItems'

const Header = () => {
    return (
        <HStack
            as="ul"
            spacing={10}
            height="16"
            position="fixed"
            top="0"
            listStyleType="none"
            color="gray.200"
            fontSize="lg"
            minW="100%"
            display="flex"
            justifyContent="flex-end"
            px="12"
            py="10"
            transition="color 0.2s ease"
            bg="rgba(19, 19, 19, 0.12)"
        >
            {NavItems.map(({ name, href }) => (
                <li key={name}>
                    <Link
                        href={href}
                        _hover={{ textDecoration: 'none', color: 'red.100' }}
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </HStack>
    )
}

export default Header

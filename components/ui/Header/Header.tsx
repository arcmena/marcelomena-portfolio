import { HStack, Link } from '@chakra-ui/layout'

import NavItems from 'utils/NavItems'

const Header = () => {
    return (
        <HStack
            as="ul"
            spacing={4}
            height="16"
            position="fixed"
            top="0"
            listStyleType="none"
            color="gray.200"
        >
            {NavItems.map(({ name, href }) => (
                <li key={name}>
                    <Link href={href}>{name}</Link>
                </li>
            ))}
        </HStack>
    )
}

export default Header

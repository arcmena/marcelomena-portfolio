import { useEffect, useState } from 'react'
import { Box, HStack, Link } from '@chakra-ui/layout'

import NavItems from 'utils/NavItems'
import MenuNav from '../MenuNav'

const Header = () => {
    const [scrolledHero, setScrolledHero] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleScroll = () =>
        setScrolledHero(window.scrollY > window.innerHeight)

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, true)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box
            minW="100%"
            display="flex"
            justifyContent="flex-end"
            position="fixed"
            top="0"
            zIndex={2}
            style={{ backdropFilter: 'saturate(180%) blur(14px)' }}
            px="12"
            py="6"
        >
            <HStack
                display={['none', 'inline']}
                as="div"
                spacing={10}
                listStyleType="none"
                color={scrolledHero ? 'black.100' : 'gray.200'}
                fontWeight={scrolledHero && 'bold'}
                fontSize="lg"
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

            <MenuNav
                display={['inline', 'none']}
                isOpen={isOpen}
                handleNavClick={() => setIsOpen(!isOpen)}
                scrolledHero={scrolledHero}
            />
        </Box>
    )
}

export default Header

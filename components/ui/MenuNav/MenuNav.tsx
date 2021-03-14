import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import NavItems from 'utils/NavItems'
import { Link } from '@chakra-ui/layout'

const MenuNav = ({ isOpen, handleNavClick, display, scrolledHero }) => {
    return (
        <Menu>
            <MenuButton
                display={display}
                aria-label="Options"
                size="md"
                onClick={handleNavClick}
                py={2}
                px={3}
                borderRadius="4"
                variant="solid"
                backgroundColor={scrolledHero ? 'gray.200' : 'black.100'}
            >
                {isOpen ? (
                    <HamburgerIcon
                        color={scrolledHero ? 'black.100' : 'gray.200'}
                    />
                ) : (
                    <CloseIcon
                        color={scrolledHero ? 'black.100' : 'gray.200'}
                    />
                )}
            </MenuButton>
            <MenuList>
                {NavItems.map(({ name, href }) => (
                    <MenuItem as="a" href={href}>
                        {name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default MenuNav

import { Flex, Heading, Text } from '@chakra-ui/layout'

import { JSIcon, NodeIcon, ReactIcon } from 'components/ui/Icons'

type SkillItemProps = {
    name: string
    desc: string
    pattern: string
}

const IconSwitch = (name: string) => {
    switch (name) {
        case 'Javascript': {
            return <JSIcon w="90px" h="90px" />
        }
        case 'React': {
            return <ReactIcon w="98px" h="88px" />
        }
        case 'Node': {
            return <NodeIcon w="85px" h="96px" />
        }
        default:
            break
    }
}

const SkillItem = ({ name, desc, pattern }: SkillItemProps) => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="315px"
            h="335px"
            bg="black.100"
            color="gray.200"
            px="12"
            flexShrink={0}
            bgImage={pattern}
        >
            {IconSwitch(name)}
            <Text as="h4" fontSize="2xl" py="4">
                {name}
            </Text>
            <Text as="span" fontSize="lg">
                {desc}
            </Text>
        </Flex>
    )
}

export default SkillItem

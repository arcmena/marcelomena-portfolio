import { Flex, FlexProps } from '@chakra-ui/layout'
import { PropsWithChildren } from 'react'

type SectionProps = FlexProps & PropsWithChildren<{}>

const Section = ({ children, ...rest }: SectionProps) => {
    return (
        <Flex as="section" {...rest}>
            {children}
        </Flex>
    )
}

export default Section

import { Box, Link, Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import {
    GithubIcon,
    LinkedInIcon,
    GmailIcon,
    InstagramIcon
} from 'components/ui'
import Redirects from 'utils/Redirects'

const Container = styled.a`
    cursor: pointer;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 120px;
    width: 120px;

    transition: background-color, 0.2s;

    margin: 16px;

    span {
        font-size: 0;

        padding: 10px 0;

        color: #e2e8f0;

        transition: font-size 0.2s;
    }

    &:hover {
        background-color: rgba(92, 92, 92, 0.7);

        span {
            font-size: 18px;
        }
    }
`

const IconSwitch = (name: string) => {
    switch (name) {
        case 'Github': {
            return (
                <GithubIcon
                    viewBox="0 0 50 50"
                    w={45}
                    h={45}
                    color="gray.200"
                />
            )
        }
        case 'LinkedIn': {
            return (
                <LinkedInIcon
                    viewBox="0 0 50 50"
                    w={45}
                    h={45}
                    color="gray.200"
                />
            )
        }
        case 'Gmail': {
            return (
                <GmailIcon viewBox="0 0 50 50" w={45} h={45} color="gray.200" />
            )
        }
        case 'Instagram': {
            return (
                <InstagramIcon
                    viewBox="0 0 50 50"
                    w={45}
                    h={45}
                    color="gray.200"
                />
            )
        }
        default:
            break
    }
}

type ContactItemProps = {
    name: string
}

const ContactItem = ({ name }: ContactItemProps) => {
    return (
        <Container href={Redirects[name.toLowerCase()]} target="_blank">
            {IconSwitch(name)}
            <span>{name}</span>
        </Container>
    )
}

export default ContactItem

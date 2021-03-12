import { Box, Link, Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import {
    GithubIcon,
    LinkedInIcon,
    GmailIcon,
    InstagramIcon
} from 'components/ui'
import Redirects from 'utils/Redirects'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: font-size 0.2s, background-color 0.2s ease;

    height: 120px;
    width: 120px;

    cursor: pointer;
    border-radius: 4px;

    .text {
        font-size: 0px;
    }

    &:hover {
        background-color: rgba(92, 92, 92, 0.7);

        .text {
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

const ContactItem = ({ name }) => {
    return (
        <Link
            href={Redirects.instagram}
            target="_blank"
            _hover={{ textDecoration: 'none' }}
        >
            <Container>
                {IconSwitch(name)}
                <Text className="text" color="gray.200" py="2">
                    {name}
                </Text>
            </Container>
        </Link>
    )
}

export default ContactItem

import Document, {
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document'

class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

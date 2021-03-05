import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Marcelo Mena</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to my <a>portfolio</a>!
                </h1>

                <p className={styles.description}>
                    This is where I'll introduce myself!
                </p>
            </main>
        </div>
    )
}

export default Home

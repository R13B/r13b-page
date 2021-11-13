import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Footer from '../components/footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}> v0.1 </nav>

      <header>
        <div className={styles.logo}>
            <Image src="/images/r13blogo/r13b.logo.svg" alt="R13B logo" height={150} width={250}/>
        </div>

        <div className={styles.grid_home_menu}>
            <Link href="/apps">
              <a>
                <h2>APPS</h2>
              </a>
            </Link>

            <Link href="/games">
              <a>
                <h2>GAMES</h2>
              </a>
            </Link>

            <Link href="/eu">
              <a>
                <h2>EU</h2>
              </a>
            </Link>

            <Link href="/eu/contact">
              <a>
                <h2>CONTACT</h2>
              </a>
            </Link>
        </div>
      </header>
      
      <main className={styles.main}>
 
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <Image src="/images/276x150.test.png" width={368} height={204}/>
            <h2>Game os War: Exemple</h2>
          </a>

          <a href="#" className={styles.card}>
          <Image src="/images/276x150.test.png" width={368} height={204}/>
            <h2>Jogo de Cartas: Game do Ano</h2>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <Image src="/images/276x150.test.png" width={368} height={204}/>
            <h2>Um Super Jogo: Melhor Jogo</h2>
          </a>

        </div>
      </main>
      <Footer/>
    </div>
  )
}

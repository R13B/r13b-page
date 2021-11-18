import SEO from '../components/seo'
import styles from '../styles/home.module.css'
import Footer from '../components/footer'
import Link from 'next/link'

function Card(props){
  return (
    <Link href={props.href}>
      <a className={styles.card}>
        <img className={styles.img} src= {props.src} alt={props.alt} />
        <h2>{props.title}</h2>
      </a>
    </Link>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO
              title="Home"
              description="The official website of the game development company R13B."
              page_url="" 
      />
      
      <nav className={styles.nav}> v0.1 </nav>

      <header>
        <div className={styles.logo}>
            <img className={styles.img} src={'/images/r13blogo/r13b.logo.svg'} alt="R13B logo"/>
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
            <Card href="#" src= {'/images/368x204.test.png'} alt="R13B banner 1" title="Game os War: Exemple"/>

            <Card href="#" src={'/images/368x204.test.png'} alt="R13B banner 2" title="Jogo de Cartas: Game do Ano"/>

            <Card href="#" src={'/images/368x204.test.png'} alt="R13B banner 3" title="Um Super Jogo: Melhor Jogo"/>

        </div>
      </main>
      <Footer/>
    </div>
  )
}

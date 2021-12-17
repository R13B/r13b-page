import SEO from '../components/seo'
import styles from '../styles/home.module.css'
import Footer from '../components/footer'
import Link from 'next/link'

function Card(props){
  return (
    <Link href={props.href}>
      <a className={styles.card}>
        <img className={styles.card__img} src= {props.src} alt={props.alt} />
        <h2 className={styles.card__title_config}>{props.title}</h2>
      </a>
    </Link>
  )
}

function Btn(props){
  return (
    <Link href={props.href}>
      <a className={styles.menu__btn_red}>
        <h2 className={styles.menu__btn_textscale}>{props.children}</h2>
      </a>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="container">
      <SEO
              title="Home"
              description="The official website of the game development company R13B."
              page_url="" 
      />
      
      <nav className="container__nav"> v0.1 </nav>

      <header className="container__header">
        <div className={styles.logo}>
            <img className={styles.logo__img} src={'/images/r13blogo/r13b.logo.svg'} alt="R13B logo"/>
        </div>

        <div className={styles.menu}>
            <Btn href = "/" >GAMES</Btn>
            <Btn href = "/eu" >EU</Btn>
            <Btn href = "/eu/contact" >CONTACT</Btn>
        </div>
      </header>
      
      <main className="container__main">
 
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

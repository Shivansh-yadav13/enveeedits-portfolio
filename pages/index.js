import About from '../components/About'
import Contact from '../components/Contact'
import Editz from '../components/Editz'
import HeroNew from '../components/HeroNew'
import styles from '../styles/Home.module.css'

// import { useParallax } from 'react-scroll-parallax'

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroNew/>
      {/* <About/> */}
      <Editz />
      <Contact />
    </div>
  )
}

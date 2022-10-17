import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
      <ul>
        <Link  href="/">
          <li>Home</li>
        </Link>
        <Link href="#about">
          <li >About</li>
        </Link>
        <Link href="#edits">
          <li >Edits</li>
        </Link>
        <Link href="#contact">
          <li>Contact</li>
        </Link>
      </ul>
      </div>
    </div>
  )
}

export default Navbar

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <h1>Follow my Social Media</h1>
        <ul>
          <li>
            <a href="https://instagram.com">
              <Image src="/insta_logo.png" width={75} height={75} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <Image src="/fb_logo.png" width={75} height={75} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.in"></a>
            <Image src="/linkedin_logo.png" width={75} height={75} />
          </li>
        </ul>
      </div>
      <div className={styles.table}>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <ul>
            <li>vashi@gmail.com</li>
          </ul>
        </div>
        <div className={styles.nav}>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#edits">Edits</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.socails}>
          <h3>Socials</h3>
          <ul>
          <li>
            <a href="https://instagram.com">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://linkedin.in"></a>
            LinkedIn
          </li>
        </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          2022-2023 by <span>Vashi</span>. Created by{" "}
          <span>
            <a href="https://github.com/shivansh-yadav13">Shivansh Yadav</a>
            </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

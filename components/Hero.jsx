import Image from "next/image";
import styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <p>Hello, I'm</p>
      <h1>EnveeEditz</h1>
      <Image src="/hero.jpg" width={1920} height={1080} />
    </div>
  );
};

export default Hero

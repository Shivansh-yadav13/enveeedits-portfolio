import Image from "next/image";
import styles from '../styles/heronew.module.css'

const HeroNew = () => {
  return (
    <div className={styles.hero}>
      {/* <p className={styles.greet}>Hello, I'm</p> */}
      <h1>Envee<span>Editz</span></h1>
      <p className={styles.line}>Video Editor | Graphics Designer | Content Creator</p>
      {/* <Image src="/hero.jpg" width={1920} height={1080} /> */}
    </div>
  );
};

export default HeroNew

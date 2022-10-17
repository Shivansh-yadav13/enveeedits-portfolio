import styles from "../styles/contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className={styles.background}>
        {/* <Image src="/contact_1.jpg" width="1000" height="563" />
      <Image src="/contact_2.jpg" width="1000" height="580" /> */}
        {/* <Image src="/contact_4.jpg" width="1920" height="1000" /> */}
      </div>
      <div id="contact" className={styles.contact}>
        <div>
          <h1>Contact</h1>
          <h3>Grow your content through my Edits.</h3>
          <div className={styles.contact_form}>
            <form action="">
              <div>
                <label htmlFor="full-name">Full Name*</label>
                <input id="full-name" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input id="email" type="email" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" cols="50" maxlength="200" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className={styles.contact_img}>
          <Image src="/contact_2.jpg" alt="contact" width="1000" height="580" />
        </div>
      </div>
    </>
  );
};

export default Contact;

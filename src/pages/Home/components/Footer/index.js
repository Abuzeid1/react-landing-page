import styles from "./style.module.css";

import images from "./images";
import List from "./List";

const data = ["Fingertipe", "Resources", "About"];
function Footer() {
  return (
    <footer id="footer" className={`section ${styles.section}`}>
      {data.map((el, ind) => (
        <List key={ind} title={el} />
      ))}

      <address className={`${styles.footerSocial}`}>
        <picture className={`${styles.image} ${styles.addressIcon}`}>
          {images.logo1}
        </picture>
        <span className={`link ${styles.address}`}>7480 Mockingbird Hill</span>
        <picture className={`${styles.image}`}>{images.logo2}</picture>
        <a href="#footer" className={`link ${styles.telephoneNumber}`}>
          (239) 555-0108{" "}
        </a>
        <figure className={`${styles.socialIcons}`}>
          <picture className={`${styles.image}`}>{images.logo3}</picture>
          <picture className={`${styles.image}`}>{images.logo4}</picture>
          <picture className={`${styles.image}`}>{images.logo5}</picture>
        </figure>
      </address>
    </footer>
  );
}

export default Footer;

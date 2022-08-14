import styles from "./style.module.css";
import images from "./images";
import Picture from "../../../../globalComponents/Picture";
function Cta() {
  return (
    <section className={`section ${styles.section}`}>
      <h2 className={`second-headline ${styles.secondHeadline}`}>
        OpenType features and Variable fonts
      </h2>
      <button className={`btn ${styles.btn}`}>Try For Free</button>
      <Picture
        pictureClassName={`${styles.image}`}
        {...images.lightningPrototype}
      ></Picture>
    </section>
  );
}

export default Cta;

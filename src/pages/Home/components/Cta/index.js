import styles from "./style.module.css";
import images from "./images";

function index() {
  return (
    <section className={`section ${styles.section}`}>
      <h2 className={`second-headline ${styles.secondHeadline}`}>
        OpenType features and Variable fonts
      </h2>
      <button className={`btn ${styles.btn}`}>Try For Free</button>
      <picture className={`${styles.image}`}>
        <source media="(max-width: 480px)" srcSet={images.lineChart._480} />
        <img loading="lazy" src={images.lineChart._1080} alt="chart line" />
      </picture>
    </section>
  );
}

export default index;

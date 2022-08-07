import styles from "./style.module.css";
import images from "./images";
function index() {
  return (
    <section className={`section`}>
      <h2 className={`second-headline`}>Partners</h2>
      <p className={`sub-heading`}>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <figure className={`${styles.logosContainer}`}>
        {Object.keys(images).map((el, index) => (
          <img loading="lazy" src={images[el]} key={`${el} ${index}`} alt="" />
        ))}
      </figure>
      <button className={`btn ${styles.btn}`}> All Partners</button>
    </section>
  );
}

export default index;

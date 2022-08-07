import styles from "./style.module.css";
import images from "./images";

function index() {
  return (
    <section className={`${styles.header}`}>
      <h1 className={`${styles.headLine} second-headline`}>
        Work at the speed of thought
      </h1>
      <p className={`${styles.subHeading} sub-heading`}>
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>

      <div className={`${styles.buttons}`}>
        <button className={`${styles.btn} ${styles.btn1} btn`}>
          Try For Free
        </button>
        <button className={`${styles.btn} ${styles.btn2} btn`}>
          Learn More
        </button>
      </div>

      <picture className={`${styles.screen}`}>
        <source media="(max-width:480px)" srcSet={images.screens._480} />
        <source media="(max-width:1080px)" srcSet={images.screens._1080} />
        <img className={styles.screenImg} src={images.screens._1920} alt="" />
      </picture>
    </section>
  );
}

export default index;

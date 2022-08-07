import styles from "./style.module.css";
import images from "./images";

function index() {
  return (
    <section className={`${styles.section}`}>
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

      <figure className={`${styles.imagesGroup}`}>
        <picture className={`${styles.image} ${styles.dashboard}`}>
          <source media="(max-width:1080)" srcSet={images.dashboard._480} />
          <img src={images.dashboard._1080} alt="dashboard" />
        </picture>
        <picture className={`${styles.image} ${styles.chatBot}`}>
          <source media="(max-width:1080)" srcSet={images.chatBot._480} />
          <img src={images.chatBot._1080} alt="chat bot" />
        </picture>
        <picture className={`${styles.image} ${styles.boards}`}>
          <source media="(max-width:1080)" srcSet={images.boards._480} />
          <img src={images.boards._1080} alt="boards" />
        </picture>
      </figure>
    </section>
  );
}

export default index;

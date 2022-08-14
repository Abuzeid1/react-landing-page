import styles from "./style.module.css";
import images from "./images";
import Picture from "../../../../globalComponents/Picture";

function Header() {
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
        <Picture
          {...images.dashboard}
          pictureClassName={`${styles.image} ${styles.dashboard}`}
        ></Picture>
        <Picture
          {...images.chatbot}
          pictureClassName={`${styles.image} ${styles.chatBot}`}
        ></Picture>
        <Picture
          {...images.boards}
          pictureClassName={`${styles.image} ${styles.boards}`}
        ></Picture>
      </figure>
    </section>
  );
}
export default Header;

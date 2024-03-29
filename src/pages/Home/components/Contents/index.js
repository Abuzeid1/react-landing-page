import styles from "./style.module.css";
import images from "./images";
import Picture from "../../../../globalComponents/Picture";

function Contents() {
  return (
    <section className={`section`}>
      <h2 className={`second-headline`}>Contents</h2>
      <p className={`sub-heading`}>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <div className={styles.cards}>
        <div className={`${styles.card1}`}>
          <h3 className={`${styles.title} title`}>Work</h3>
          <p className={`${styles.par} par`}>
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify.
          </p>
          <button className={`${styles.btn1} btn`}>Sign Up</button>
          <Picture
            pictureClassName={styles.image1}
            {...images.macBookPro}
          ></Picture>
        </div>

        <div className={`${styles.card2}`}>
          <h3 className={`${styles.title} title`}>Design with real data</h3>
          <p className={`${styles.par} par`}>
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify.
          </p>

          <button className={`${styles.btn2} btn`}> Try For Free</button>
          <Picture
            pictureClassName={styles.image2}
            {...images.boardsNotification}
          ></Picture>
        </div>
      </div>
    </section>
  );
}

export default Contents;

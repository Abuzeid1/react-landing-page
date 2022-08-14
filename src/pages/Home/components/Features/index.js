import styles from "./style.module.css";
import images from "./images";
import headerImages from "../Header/images";
import RowText from "./RowText";
import Picture from "../../../../globalComponents/Picture";
// data for features list
const data = [
  {
    title: "A single source of truth",
    svg: images.restaurant,
  },
  { title: "Intuitive interface", svg: images.alien },
  { title: "Or with rules", svg: images.infinity },
];

function Features() {
  return (
    <section className={`${styles.section} section`} id="features">
      <h2 className={`${styles.secondHeadline} second-headline`}>FEATURES</h2>
      <p className={`${styles.subHeading} sub-heading`}>
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>

      <div className={`${styles.featureFrame}`}>
        <figure className={`${styles.featureImg}`}>
          <Picture
            pictureClassName={`${styles.frameImg1}`}
            {...headerImages.chatbot}
          ></Picture>

          <Picture
            pictureClassName={`${styles.frameImg2}`}
            {...images.lineChart}
          ></Picture>
        </figure>
        <ul className={`${styles.featureRows}`}>
          {data.map((el) => (
            <RowText title={el.title} key={Math.random()} svg={el.svg} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;

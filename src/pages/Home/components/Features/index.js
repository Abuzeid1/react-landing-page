import styles from "./style.module.css";
import images from "./images";
import RowText from "./RowText";

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
          <picture className={`${styles.frameImg1}`}>
            <source
              media="(max-width: 480px)"
              srcSet={images.chatBotImg._480}
            />
            <source
              media="(max-width: 1080px)"
              srcSet={images.chatBotImg._1080}
            />
            <img loading="lazy" src={images.chatBotImg._1920} alt="" />
          </picture>

          <picture className={`${styles.frameImg2}`}>
            <source media="(max-width: 480px)" srcSet={images.chartImg._480} />
            <source
              media="(max-width: 1080px)"
              srcSet={images.chartImg._1080}
            />
            <img loading="lazy" src={images.chartImg._1920} alt="" />
          </picture>
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

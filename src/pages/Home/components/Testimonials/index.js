import styles from "./style.module.css";
import data from "./data.js";
import AvatarCard from "./AvatarCard";

function Testimonials() {
  return (
    <section className={`section`}>
      <h2 className={`second-headline`}>Testimonials</h2>
      <div className={`${styles.container}`}>
        {data.map((el, index) => (
          <AvatarCard {...el} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

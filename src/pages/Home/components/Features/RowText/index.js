import styles from "./style.module.css";

function index({ title, svg }) {
  return (
    <li className={`${styles.listItem}`}>
      <h2 className={`title ${styles.title}`}>
        <picture className={`${styles.image}`}>
          <img loading="lazy" src={svg} alt="" />
        </picture>
        {title}
      </h2>

      <p className={`sub-title ${styles.subTitle}`}>
        When you add work to your Slate calendar we automatically calculate
        useful insights
      </p>
    </li>
  );
}

export default index;

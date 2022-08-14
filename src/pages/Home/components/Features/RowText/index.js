import styles from "./style.module.css";

function RowText({ title, svg }) {
  return (
    <li className={`${styles.listItem}`}>
      <h3 className={`title ${styles.title}`}>
        <picture className={`${styles.image}`}>{svg}</picture>
        {title}
      </h3>

      <p className={`sub-title ${styles.subTitle}`}>
        When you add work to your Slate calendar we automatically calculate
        useful insights
      </p>
    </li>
  );
}

export default RowText;

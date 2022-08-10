import styles from "./style.module.css";
const data = ["Home", "Examples", "Pricing", "Updates"];

function List({ title }) {
  return (
    <ul className={`${styles.list}`}>
      <li className={`title ${styles.title}`}>{title}</li>
      {data.map((el, ind) => (
        <li key={ind} className={`link`}>
          {el}
        </li>
      ))}
    </ul>
  );
}

export default List;

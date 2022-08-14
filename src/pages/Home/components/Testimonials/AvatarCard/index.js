import styles from "./style.module.css";
import Picture from "../../../../../globalComponents/Picture";
function AvatarCard({ image, name, text }) {
  return (
    <figure className={`${styles.card}`}>
      <Picture {...image} pictureClassName={`${styles.image}`}></Picture>
      <h3 className={`link`}>{name}</h3>
      <h4 className={`sub-title ${styles.subTitle}`}>Designer</h4>
      <p className={`par ${styles.par}`}>
        {text[0]} <br />
        {text[1]}
      </p>
    </figure>
  );
}

export default AvatarCard;

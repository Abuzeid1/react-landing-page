import styles from "./style.module.css";

function AvatarCard({ image, name, text }) {
  return (
    <figure className={`${styles.card}`}>
      <picture className={`${styles.image}`}>
        <img loading="lazy" src={image} alt="" />
      </picture>
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

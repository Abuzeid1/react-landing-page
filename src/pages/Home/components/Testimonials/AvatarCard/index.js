import styles from "./style.module.css";

function AvatarCard({ image, name, text }) {
  return (
    <figure className={`${styles.card}`}>
      <picture className={`${styles.image}`}>
        <img loading="lazy" src={image} alt="" />
      </picture>
      <h4 className={`link`}>{name}</h4>
      <h5 className={`sub-title ${styles.subTitle}`}>Designer</h5>
      <p className={`par ${styles.par}`}>
        {text[0]} <br />
        {text[1]}
      </p>
    </figure>
  );
}

export default AvatarCard;

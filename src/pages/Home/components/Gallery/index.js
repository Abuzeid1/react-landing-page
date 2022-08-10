import styles from "./style.module.css";
import images from "./images";
import { useState } from "react";

function Gallery() {
  const [isActive, setIsActive] = useState(false);
  const keys = Object.keys(images);
  const [imgKeys, setImgKeys] = useState(keys.slice(0, 4));
  const handelClick = (e) => {
    e.preventDefault();
    if (!isActive) {
      setImgKeys(keys);
    } else {
      setImgKeys(keys.slice(0, 4));
    }

    setIsActive(!isActive);
  };

  return (
    <section className={`${styles.section} section`}>
      <h2 className={`second-headline`}>Gallery</h2>
      <p className={`sub-heading`}>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <figure className={`${styles.gallery}`}>
        {imgKeys.map((key, index) => (
          <img
            className={`${styles.image}`}
            key={`${key} ${index}`}
            loading="lazy"
            src={images[key]}
            alt={key}
          ></img>
        ))}
      </figure>

      <button className={`btn ${styles.btn}`} onClick={handelClick}>
        See {isActive && "Less"} {!isActive && "more"}
      </button>
    </section>
  );
}

export default Gallery;

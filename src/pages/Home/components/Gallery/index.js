import styles from "./style.module.css";
import images from "./images";
import { useState } from "react";
import Picture from "../../../../globalComponents/Picture";

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
          <Picture
            pictureClassName={`${styles.image}`}
            imageClassName={`${styles.photo}`}
            {...images[key]}
            key={`${key} ${index}`}
          ></Picture>
        ))}
      </figure>

      <button className={`btn ${styles.btn}`} onClick={handelClick}>
        See {isActive && "Less"} {!isActive && "more"}
      </button>
    </section>
  );
}

export default Gallery;

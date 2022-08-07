import styles from "./style.module.css";
import images from "./images";
import { useState } from "react";

function Gallery() {
  const [btnState, setBtnState] = useState("more");

  const handelClick = (e) => {
    e.preventDefault();
    if (btnState === "more") {
      setBtnState("less");
    } else {
      setBtnState("more");
    }
  };

  return (
    <section className={`${styles.galleryContainer} section`}>
      <h2 className={`second-headline`}>Gallery</h2>
      <p className={`sub-heading`}>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <figure
        className={`${styles.gallery} ${
          btnState === "less" ? styles.active : ""
        }`}
      >
        {Object.keys(images).map((key, index) => (
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
        See {btnState}
      </button>
    </section>
  );
}

export default Gallery;

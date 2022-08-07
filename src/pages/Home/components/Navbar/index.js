import styles from "./style.module.css";
import images from "./images";

import { useEffect, useRef, useState } from "react";

function Navbar() {
  const navMenu = useRef(null);
  const imgTest = useRef(null);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // navMenu.current.focus();
      imgTest.current.focus();
    }, 200);
  }, []);
  let handle = () => {
    console.log(navMenu, imgTest);
    // setIsOpen(!isOpen);

    setTimeout(() => {
      // navMenu.current.focus();
      imgTest.current.focus();
    }, 200);
  };

  const handleBlur = (e) => {
    setIsOpen(false);
  };
  return (
    <nav className={styles.navbar}>
      <picture className={styles.navbarImg} ref={imgTest}>
        {images.logo}
      </picture>

      <ul
        className={`${styles.navbarMenu}  ${isOpen ? styles.active : ""}`}
        ref={navMenu}
        onBlur={handleBlur}
        autoFocus
      >
        <li className={`${styles.listElement}`}>
          <a className={`${styles.navbarItem} link`} href="/">
            Home
          </a>
        </li>
        <li className={`${styles.listElement}`}>
          <a className={`${styles.navbarItem} link`} href="#features">
            Product
          </a>
        </li>

        <li className={`${styles.listElement}`}>
          <a className={`${styles.navbarItem} link`} href="#footer">
            Contact Us
          </a>
        </li>

        <li className={`${styles.listElement}`}>
          <a className={`${styles.navbarItem} link`} href="#footer">
            About Us
          </a>
        </li>
      </ul>

      <button className={`btn ${styles.navbarBtn}`}>Login</button>
      <picture className={`btn ${styles.menuBtnImg}`} onClick={handle}>
        {images.vector}
      </picture>
    </nav>
  );
}

export default Navbar;

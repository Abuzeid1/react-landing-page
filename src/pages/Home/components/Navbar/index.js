import styles from "./style.module.css";
import images from "./images";

import { useEffect, useRef, useState } from "react";

function Navbar() {
  const listRef = useRef(null);
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (
        window.scrollY >
        listRef.current.offsetTop + listRef.current.offsetHeight
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isOpen]);

  let handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <picture className={styles.navbarImg}>{images.logo}</picture>
      <ul
        className={`${styles.navbarMenu}  ${isOpen ? styles.active : ""}`}
        ref={listRef}
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

      {isOpen && (
        <div className={`${styles.overlay}`} onClick={handleClick}></div>
      )}

      <button className={`btn ${styles.navbarBtn}`}>Login</button>
      <button
        aria-label="mobile menu "
        className={`btn ${styles.menuBtnImg}`}
        onClick={handleClick}
      >
        {images.vector}
      </button>
    </nav>
  );
}

export default Navbar;

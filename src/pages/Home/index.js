import styles from "./style.module.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Contents from "./components/Contents";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const loader = document.getElementsByClassName("main-loader-container")[0];
    loader.style.visibility = "hidden";
  });
  return (
    <main className={`${styles.container}`}>
      <Navbar />
      <Header />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}

export default Home;

import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Contents from "./components/Contents";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;

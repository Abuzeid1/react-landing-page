import "./style.css";
import img from "./logo.png";
import img1 from "./Vector.svg";
import { useState } from "react";

function Index() {
  let [state1, setState1] = useState("");
  let handle = () => {
    if (state1 !== "active") {
      setState1("active");
    } else {
      setTimeout(() => {
        setState1("");
      }, 250);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-img">
        <img src={img} alt="" />{" "}
      </div>
      <div className={`navbar-menu ${state1}`}>
        <a className="navbar-item link" href="/">
          Home
        </a>
        <a className="navbar-item link" href="#features">
          Product
        </a>
        <a className="navbar-item link" href="#footer">
          About
        </a>
        <a className="navbar-item link" href="#footer">
          Contact
        </a>
      </div>
      <div className="navbar-btn-list">
        <div className="navbar-btn btn">Login</div>
        <img onClick={() => handle()} src={img1} alt="" />
      </div>
    </div>
  );
}

export default Index;

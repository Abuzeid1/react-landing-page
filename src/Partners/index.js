import "./style.css";
import logo1 from "./logos/logo1.png";
import logo2 from "./logos/logo2.png";
import logo3 from "./logos/logo3.png";
import logo4 from "./logos/logo4.png";
import logo5 from "./logos/logo5.png";
import logo6 from "./logos/logo6.png";
let logos = [logo1, logo2, logo3];
let logos1 = [logo4, logo5, logo6];

function index() {
  return (
    <section className="partners">
      <div className="second-headline">Partners</div>
      <div className="sub-heading">
        We focus on ergonomics <span className="content1" /> and meeting you
        where you work. It's only a keystroke away.
      </div>
      <div className="logos-con">
        <div className="logos ">
          {logos.map((el, ind) => (
            <img src={el} key={ind} alt="" />
          ))}
        </div>
        <div className="logos logos2">
          {logos1.map((el, ind) => (
            <img src={el} key={ind} alt="" />
          ))}
        </div>
      </div>
      <button className="btn"> All Partners</button>
    </section>
  );
}

export default index;

import "./style.css";
import List from "./List";
import logo1 from "./logos/logo1.png";
import logo2 from "./logos/logo2.png";
import logo3 from "./logos/logo3.png";
import logo4 from "./logos/logo4.png";
import logo5 from "./logos/logo5.png";

const data = ["Fingertipe", "Resources", "About"];
function index() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-list">
          {data.map((el, ind) => (
            <List key={ind} title={el} />
          ))}
        </div>

        <div className="footer-social">
          <div className="footer-block">
            <img src={logo1} alt="" />
            <div className="adress">7480 Mockingbird Hill undefined </div>
          </div>
          <div className="footer-block">
            <img src={logo2} alt="" />
            <div className="adress">(239) 555-0108 </div>
          </div>
          <div className="social-icons">
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default index;

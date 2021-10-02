import "./style.css";
import image1 from "./images/Chat Bot.png";
import image2 from "./images/Line Chart.png";
import Rowtext from "./Rowtext";

import svg1 from "./images/resturant.svg";
import svg2 from "./images/alien.svg";
import svg3 from "./images/infinity.svg";
const svgs = [svg1, svg2, svg3];
const titles = [
  "A single source of truth",
  "Intuitive interface",
  "Or with rules",
];
function index() {
  return (
    <div className="feature-frame">
      <div className="feature-img">
        <img className="frame-img1" src={image1} alt="" />

        <img className="frame-img2" src={image2} alt="" />
      </div>
      <div className="feature-rows">
        {titles.map((el, ind) => {
          return <Rowtext title={el} key={ind} svg={svgs[ind]} />;
        })}
      </div>
    </div>
  );
}

export default index;

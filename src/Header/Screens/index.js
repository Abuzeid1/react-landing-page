import "./style.css";
import image from "./screens.png";
function index() {
  return (
    <div>
      <div className="screen">
        <img src={image} alt="" />
        <div className="screen-gradient"></div>
      </div>
    </div>
  );
}

export default index;

import "./style.css";
import image from "./Line Chart.png";

function index() {
  return (
    <section className="cta">
      <div className="content">
        <div className="left-content">
          <div className="second-headline">
            OpenType features and Variable fonts
          </div>
          <button>Try For Free</button>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default index;

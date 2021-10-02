import "./style.css";
import avatar1 from "./images/Ellipse 2.png";
import avatar2 from "./images/Ellipse 2 (1).png";
import avatar3 from "./images/Ellipse 2 (2).png";
import avatar4 from "./images/Ellipse 2 (3).png";
import Avatarcard from "./Avatarcard";

const names = ["Claire Bell", "Francisco Lane", "Ralph Fisher", "jorge Murphy"];
const data = [
  "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days",
  "you need to work to reach your financial goal for the month and year.your financial goal for the month and year.",
  "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days",
  "you need to work to reach your financial goal for the month and year.",
];

function index() {
  return (
    <section>
      <div className="second-headline">Testimonials</div>
      <div className="t-items">
        <div className="t-card">
          <Avatarcard image={avatar1} name={names[0]} text={data.slice(0, 2)} />
          <Avatarcard image={avatar2} name={names[1]} text={data.slice(0, 2)} />
        </div>
        <div className="t-card">
          <Avatarcard image={avatar3} name={names[2]} text={data.slice(2)} />
          <Avatarcard image={avatar4} name={names[3]} text={data.slice(2)} />
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default index;

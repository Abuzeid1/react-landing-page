import "./style.css";
import card1 from "./images/Rectangle 1.png";
import card2 from "./images/Rectangle 1 (1).png";
import card3 from "./images/Rectangle 1 (2).png";
import card4 from "./images/Rectangle 1 (3).png";
import card5 from "./images/Rectangle 1 (4).png";
import card6 from "./images/Rectangle 1 (5).png";
import card7 from "./images/Rectangle 1 (6).png";
let cards = [card1, card2, card3, card4];

function index() {
  return (
    <section className="gallery">
      <div className="second-headline">Gallery</div>
      <div className="sub-heading">
        We focus on ergonomics and meeting you where you work.
        <span className="content1" /> It's only a keystroke away.
      </div>
      <div className="gallery-cards">
        <div className="gallery-1">
          {cards.map((item, ind) => (
            <img key={ind} src={item} alt=""></img>
          ))}
        </div>
        <div className="gallery-2">
          <img src={card5} className="card-1" alt=""></img>
          <img src={card6} className="card-2" alt=""></img>
          <img src={card7} className="card-3" alt=""></img>
        </div>
      </div>
      <button className="btn">See more</button>
    </section>
  );
}

export default index;

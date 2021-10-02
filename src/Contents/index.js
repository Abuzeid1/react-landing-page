import "./style.css";
import img1 from "./Boards.png";
import img2 from "./Macbook.png";

function Index() {
  return (
    <section className="contents">
      <div className="heading">
        <div className="second-headline">Contents</div>
        <div className="sub-heading">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </div>
      </div>
      <div className="cards">
        <div className="card card1">
          <div className="heading">
            <div className="title">Work</div>
            <div className="paragraph">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </div>
          </div>
          <button className="btn">Sign Up</button>
          <img src={img2} alt="" />
        </div>
        <div className="card card2">
          <div className="heading">
            <div className="title">Design with real data</div>
            <div className="paragraph">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </div>
          </div>
          <button className="btn"> Try For Free</button>
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Index;

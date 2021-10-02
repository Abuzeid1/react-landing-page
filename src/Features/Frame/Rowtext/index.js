import "./style.css";

function index({ title, svg }) {
  return (
    <div className="rowtext">
      <div className="rowtext-headline">
        <img src={svg} alt="" />
        <div className="title">{title}</div>
      </div>

      <div className="paragraph">
        When you add work to your Slate calendar we automatically calculate
        useful insights
      </div>
    </div>
  );
}

export default index;

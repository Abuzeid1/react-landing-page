import "./style.css";

function index({ image, name, text }) {
  return (
    <div className="avatar-card">
      <div className="avatar-heading">
        <img src={image} alt="" />
        <div>
          <div className="link">{name}</div>
          <div className="sub-title">Designer</div>
        </div>
      </div>
      <div className="paragraph">
        {text[0]} <br />
        {text[1]}
      </div>
    </div>
  );
}

export default index;

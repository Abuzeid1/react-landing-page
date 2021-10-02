import "./style.css";
const data = ["Home", "Examples", "Pricing", "Updates"];

function index({ title }) {
  return (
    <ul>
      <li className="title">{title}</li>
      {data.map((el, ind) => (
        <li key={ind} className="link">
          {el}
        </li>
      ))}
    </ul>
  );
}

export default index;

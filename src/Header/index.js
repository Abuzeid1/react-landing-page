import "./style.css";
import Navbar from "./Navbar";
import Text from "./Text";
import Buttons from "./Buttons";
import Screens from "./Screens";

function index() {
  return (
    <section className="header">
      <Navbar />
      <Text />
      <Buttons />
      <Screens />
    </section>
  );
}

export default index;

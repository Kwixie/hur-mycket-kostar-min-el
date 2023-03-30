import Nav from "../components/nav/nav.component";
import Spartips from "../components/spartips/spartips.component";
import Robot from "../assets/robotTransparent.png";
import "./spartips.page.component.scss";
import Lightbulb from "../assets/light_bulb_transparent.png";
import SPARTIPS_DATA from "../spartips-data";

const SpartipsPage = () => {
  return (
    <div className="spartips-page">
      <Nav />
      <h1>Spartips</h1>
      <div className="spartips-container">
        {SPARTIPS_DATA.map((spartipsItem) => (
          <Spartips key={spartipsItem.id} spartipsItem={spartipsItem} />
        ))}
      </div>
      <img className="light-bulb" src={Lightbulb} alt="light bulb" />
      <img className="robot" src={Robot} alt="robot" />
    </div>
  );
};

export default SpartipsPage;

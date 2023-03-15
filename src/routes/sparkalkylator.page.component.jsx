import Sparkalkylator from "../components/sparkalkylator/sparkalkylator.component";
import Nav from "../components/nav/nav.component";
import "./sparkalkylator.page.component.scss";
import Robot from "../assets/robotTransparent.png";

const Sparkalkylatorn = () => {
  return (
    <div className="sparkalkylator-page">
      <Nav />
      <Sparkalkylator />
      <img className="robot" src={Robot} alt="robot logo" />
    </div>
  );
};

export default Sparkalkylatorn;

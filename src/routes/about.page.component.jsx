import Nav from "../components/nav/nav.component";
import "./authentication.page.component.scss";
import Lightbulb from "../assets/light_bulb_transparent.png";
import Robot from "../assets/robotTransparent.png";
import About from "../components/about/about.component";
import "./about.page.styles.scss";

const AboutPage = () => {
  return (
    <div className="authentication-page">
      <img className="light-bulb" src={Lightbulb} alt="light bulb" />
      <img className="robot" src={Robot} alt="robot logo" />
      <Nav />
      <div className="content-container">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;

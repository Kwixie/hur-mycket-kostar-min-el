import Card from "../components/card/card.component";
import Hero from "../components/hero/hero.component";
import Netowner from "../components/netowner/netowner-section.component";
import ExamplesList from "../components/elbovslistan/elbovslistan.component";
import Nav from "../components/nav/nav.component";
import SPARTIPS_DATA from "../spartips-data";
import { updatePassword } from "firebase/auth";

const LED = SPARTIPS_DATA[3];
const LOCKET = SPARTIPS_DATA[4];
const WASH = SPARTIPS_DATA[8];
const threeSpartipsData = [LED, LOCKET, WASH];

const Home = () => {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Netowner />
      <div className="calculator-section">
        <ExamplesList />
      </div>
      <div className="articles-section">
        <h2 className="elspartips">Elspartips</h2>
        <div className="articles-container">
          {threeSpartipsData.map((spartips) => (
            <Card key={spartips.id} spartips={spartips} />
          ))}
        </div>
        <footer>
          <p>
            Copyright <span>&#169;</span> Emelie Köhler
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;

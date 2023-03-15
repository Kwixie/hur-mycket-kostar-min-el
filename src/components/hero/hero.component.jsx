import "./hero.styles.scss";
import { useState, useEffect, useContext } from "react";
import CountUp from "react-countup";
import { HashLink } from "react-router-hash-link";
import POWER_DATA from "../../power-data";
import { ElprisContext } from "../../contexts/elpris.context";
import Robot from "../../assets/robotTransparent.png";

const Hero = () => {
  const { currentElpris, setCurrentElpris, pricePerKwh } =
    useContext(ElprisContext);

  const [elprisArea, setElprisArea] = useState("SE4");

  const newElprisArea = (event) => {
    setElprisArea(event.target.name);
  };

  const handleClick = (event) => {
    newElprisArea(event);
  };

  useEffect(() => {
    const date = new Date();
    let hour = date.getHours();
    let day = date.getDate().toString();
    if (day.length < 2) {
      day = "0" + day;
    }
    let monthNum = date.getMonth() + 1;
    let month = monthNum.toString();
    if (month.length < 2) {
      month = "0" + month;
    }
    let year = date.getFullYear();
    let currentDate = `${year}/${month}-${day}`;

    fetch(
      `https://www.elprisetjustnu.se/api/v1/prices/${currentDate}_${elprisArea}.json`
    )
      .then((response) => response.json())
      .then((data) =>
        setCurrentElpris(Math.round(data[hour].SEK_per_kWh * 100) / 100)
      );
  }, [elprisArea, setCurrentElpris]);

  return (
    <div>
      <section className="header-section">
        <img className="robot" src={Robot} alt="robot logo" />
        <div className="header-container">
          <div className="left-container">
            <h1>
              HUR MYCKET <br /> KOSTAR <br /> MIN EL?
            </h1>
            <button>
              <HashLink smooth to="/#elbovslistan">
                Elbovslistan
              </HashLink>
            </button>
          </div>
          <div className="right-container">
            <div className="big-bubble">
              <div className="small-bubble">
                <span className="material-icons">shower</span>
                <h2 className="shower">Just nu kostar en varm dusch </h2>
                <span>
                  <CountUp
                    start={0}
                    end={
                      Math.round(
                        ((POWER_DATA[1].power * 0.2 * pricePerKwh) / 1000) * 10
                      ) / 10
                    }
                    duration={2}
                    delay={0}
                  />{" "}
                  kr
                </span>
              </div>
              <h2>Elspotpriset ligger på</h2>
              <span className="elspotpriset"> {currentElpris} kr/kWh</span>
              <p>ELPRISOMRÅDE</p>
              <div className="btn-group">
                <button
                  className={elprisArea === "SE1" ? "active" : ""}
                  onClick={handleClick}
                  name="SE1"
                >
                  1
                </button>
                <button
                  className={elprisArea === "SE2" ? "active" : ""}
                  onClick={handleClick}
                  name="SE2"
                >
                  2
                </button>
                <button
                  className={elprisArea === "SE3" ? "active" : ""}
                  onClick={handleClick}
                  name="SE3"
                >
                  3
                </button>
                <button
                  className={elprisArea === "SE4" ? "active" : ""}
                  onClick={handleClick}
                  name="SE4"
                >
                  4
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

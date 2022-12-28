import "./header.styles.scss";
import { useState, useEffect } from "react";
import POWER_DATA from "../../power-data";

const Header = () => {
  const [elpris, setElpris] = useState(0);
  const [elprisArea, setElprisArea] = useState("SE4");

  const date = new Date();
  let hour = date.getHours();
  let day = date.getDate();
  if (day.length < 2) {
    day = "0" + day;
  }
  let month = date.getMonth() + 1;
  if (month.length < 2) {
    month = "0" + day;
  }
  let year = date.getFullYear();
  let currentDate = `${year}/${month}-${day}`;

  const newElprisArea = (event) => {
    console.log(event);
    setElprisArea(event.target.name);
    console.log(elprisArea);
  };

  const handleClick = (event) => {
    newElprisArea(event);
  };

  useEffect(() => {
    fetch(
      `https://www.elprisetjustnu.se/api/v1/prices/${currentDate}_${elprisArea}.json`
    )
      .then((response) => response.json())
      .then((data) =>
        setElpris(Math.floor(data[hour].SEK_per_kWh * 100) / 100)
      );
  }, [elprisArea, currentDate, hour]);

  return (
    <div className="header-section">
      <div className="left-container">
        <h1>HUR MYCKET KOSTAR MIN EL?</h1>
        <button>KALKYLATORN</button>
      </div>
      <div className="info-container">
        <h2>
          Just nu kostar en varm dusch{" "}
          {Math.round(((POWER_DATA[0].power * 0.2 * elpris) / 1000) * 10) / 10}{" "}
          kr
          <span className="material-icons">shower</span>
        </h2>
        <h2>Elpriset ligger på</h2>
        <p> {elpris} kr/kWh</p>
        <div>
          <button onClick={handleClick} name="SE1">
            SE1
          </button>
          <button onClick={handleClick} name="SE2">
            SE2
          </button>
          <button onClick={handleClick} name="SE3">
            SE3
          </button>
          <button onClick={handleClick} name="SE4">
            SE4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

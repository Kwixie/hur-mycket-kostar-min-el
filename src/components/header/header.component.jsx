import "./header.styles.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [elpris, setElpris] = useState(0);

  const date = new Date();

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

  useEffect(() => {
    fetch(`https://www.elprisetjustnu.se/api/v1/prices/${currentDate}_SE3.json`)
      .then((response) => response.json())
      .then((data) => setElpris(data[0].SEK_per_kWh));
  }, []);

  return (
    <div className="header-section">
      <div className="left-container">
        <h1>HUR MYCKET KOSTAR MIN EL?</h1>
        <button>KALKYLATORN</button>
      </div>
      <div className="info-container">
        <h2>Idag kostar</h2>
        <p>En kopp kaffe 2kr</p>
        <p>En TV-kväll 10kr</p>
        <p>En tvätt 16kr</p>
        <p>Gratäng till middag 34kr</p>
        <h2>Dagens elpris {elpris} kr/kWh</h2>
      </div>
    </div>
  );
};

export default Header;

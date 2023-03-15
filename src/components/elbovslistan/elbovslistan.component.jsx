import POWER_DATA from "../../power-data";
import { useContext } from "react";
import { ElprisContext } from "../../contexts/elpris.context";
import "./elbovslistan.styles.scss";

const ExamplesList = () => {
  const { pricePerKwh } = useContext(ElprisContext);

  const calculateCost = (power, duration, pricePerKwh) => {
    return Math.round(((power * duration * pricePerKwh) / 1000) * 100) / 100;
  };

  return (
    <section className="elbovslistan-section" id="elbovslistan">
      <h1>Elbovslistan</h1>
      <div className="elbovslistan-container">
        {POWER_DATA.map((device) => {
          return (
            <div key={device.id} className="device-container">
              <div className="first-row">
                <div>
                  <span className="material-icons">{device.icon}</span>
                  <p>{device.description}</p>
                </div>
                <p className="elbovslistan-cost">
                  {calculateCost(device.power, device.duration, pricePerKwh)} kr{" "}
                </p>
              </div>
              <p className="details">{`${device.power}W x ${
                device.duration
              }h = ${
                Math.round(((device.power * device.duration) / 1000) * 100) /
                100
              } kWh`}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExamplesList;

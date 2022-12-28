import POWER_DATA from "../../power-data";

const ExamplesList = () => {
  let elpris = 1;
  const calculateCost = (power, duration, elpris) => {
    return (power * duration * elpris) / 1000;
  };

  return (
    <div>
      <h1>Listan</h1>
      {POWER_DATA.map((device) => {
        return (
          <div key={device.id}>
            <p>{device.description}</p>
            <p>{calculateCost(device.power, device.duration, elpris)} kr </p>
            <span className="material-icons">{device.icon}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ExamplesList;

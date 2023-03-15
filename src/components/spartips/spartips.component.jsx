import "./spartips.styles.scss";
import { ElprisContext } from "../../contexts/elpris.context";
import { useContext } from "react";

const Spartips = ({ spartipsItem }) => {
  const { pricePerKwh } = useContext(ElprisContext);
  console.log(pricePerKwh);
  const { imageUrl, heading, text, example, exampleYear, kWhDiff, yearK } =
    spartipsItem;
  return (
    <div className="spartipsItem-container">
      <img src={imageUrl} alt="img"></img>
      <div className="text-container">
        <h2>{heading}</h2>
        <p>{text}</p>
        <p className="save-now">
          Just nu sparar du{" "}
          <span>{Math.round(pricePerKwh * kWhDiff * 100) / 100}</span> kr{" "}
          {example}
        </p>
        <p className="save-year">
          {exampleYear} <span>{Math.round(yearK * kWhDiff * pricePerKwh)}</span>{" "}
          kr.
        </p>
      </div>
    </div>
  );
};

export default Spartips;

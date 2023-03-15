import { DocumentSnapshot } from "firebase/firestore";
import "./card.styles.scss";
import { Link } from "react-router-dom";

const Card = ({ spartips }) => {
  const { imageUrl, heading, text } = spartips;
  return (
    <div className="card-container">
      <img src={imageUrl} alt="img"></img>
      <h2>{heading}</h2>
      <p>
        {text}{" "}
        <Link className="spartips-link" to="/spartips">
          Läs mer...
        </Link>
      </p>
    </div>
  );
};

export default Card;

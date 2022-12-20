import "./card.styles.scss";

const Card = ({ article }) => {
  const { imageUrl, title } = article;
  return (
    <div className="card-container">
      <img src={imageUrl} alt="img"></img>
      <h2>{title}</h2>
      <p>Lorem ipsum</p>
    </div>
  );
};

export default Card;

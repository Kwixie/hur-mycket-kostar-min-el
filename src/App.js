import Card from "./components/card/card.component.jsx";
import "./header.style.scss";

const articleInfo = [
  {
    id: 1,
    title: "Topplistan",
    imageUrl: "https://source.unsplash.com/GmBT6GQEOs0/",
  },
  {
    id: 2,
    title: "Nyheter",
    imageUrl: "https://source.unsplash.com/R9L7ukhBSgs/",
  },
  {
    id: 3,
    title: "Spartips",
    imageUrl: "https://source.unsplash.com/1N8iqSsn7ls/",
  },
];

const App = () => {
  return (
    <div>
      <nav className="nav">
        <h2>LOGO</h2>
        <ul>
          <li>Topplistan</li>
          <li>Spartips</li>
          <li>Logga in</li>
        </ul>
      </nav>
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
        </div>
      </div>
      <div className="calculator-section">
        <h1>KALKYLATORN</h1>
      </div>
      <div className="articles-section">
        <div className="articles-container">
          {articleInfo.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
        <footer>
          <p>Cpywright Emelie Köhler</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

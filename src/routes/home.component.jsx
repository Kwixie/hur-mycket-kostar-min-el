import Card from "../components/card/card.component";
import Header from "../components/header/header.component";
import ExamplesList from "../components/examples-list/examples-list.component";

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

const Home = () => {
  return (
    <div className="body">
      <Header />
      <div className="calculator-section">
        <ExamplesList />
      </div>
      <div className="articles-section">
        <div className="articles-container">
          {articleInfo.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
        <footer>
          <p>Copywright Emelie Köhler</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;

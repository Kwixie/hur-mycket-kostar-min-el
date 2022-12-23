import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.component";
import Spartips from "./components/spartips/spartips.component";
import Nav from "./components/nav/nav.component";
import Authentication from "./routes/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="spartips" element={<Spartips />} />
        <Route path="logga-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

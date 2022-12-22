import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.component";
import Spartips from "./components/spartips/spartips.component";
import Nav from "./components/nav/nav.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="spartips" element={<Spartips />} />
      </Route>
    </Routes>
  );
};

export default App;

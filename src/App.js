import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.page.component";
import SpartipsPage from "./routes/spartips.page.component";
import Authentication from "./routes/authentication.page.component";
import Sparkalkylatorn from "./routes/sparkalkylator.page.component";
import ScrollToTop from "./components/scroll-to-top.compponent";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="spartips" element={<SpartipsPage />} />
        <Route path="logga-in" element={<Authentication />} />
        <Route path="sparkalkylatorn" element={<Sparkalkylatorn />} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;

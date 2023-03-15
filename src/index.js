import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ElprisProvider } from "./contexts/elpris.context";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ElprisProvider>
          <App />
        </ElprisProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

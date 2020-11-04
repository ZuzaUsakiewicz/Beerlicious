import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BeerAppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <BeerAppProvider>
      <Router>
        <App />
      </Router>
    </BeerAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

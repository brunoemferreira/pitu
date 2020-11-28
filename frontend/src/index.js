import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

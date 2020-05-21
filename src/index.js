import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import IndexProvider from "./context";

ReactDOM.render(
  <IndexProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IndexProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

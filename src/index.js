import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { register } from "./serviceWorkerRegistration";

import { App } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

//activate service worker
register();

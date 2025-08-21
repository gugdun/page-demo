import { render } from "preact";
import { App } from "./App";
import { LoaderTransition } from "./LoaderTransition";

import "./styles/main.scss";

render(
  <LoaderTransition>
    <App />
  </LoaderTransition>,
  document.getElementById("app")!
);

import React from "react";
import "./index.css";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { configuredStore } from "./store";

const store = configuredStore();

document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line global-require
  const Root = require("./containers/Root").default;
  render(
    <React.Fragment>
      <Root store={store} />
    </React.Fragment>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

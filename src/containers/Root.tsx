import React from "react";
import { Provider } from "react-redux";
import App from "../App";
import { Store } from "../store";

type Props = {
  store: Store;
};

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <App></App>
  </Provider>
);

export default Root;

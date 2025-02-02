import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./Routes";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

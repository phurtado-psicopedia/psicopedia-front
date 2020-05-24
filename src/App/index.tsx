import React from "react";

import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Routes from "./Routes";

import "../Language";
// import Loader from "./Components/Loader";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
      {/* <Loader /> */}
    </Provider>
  );
}

export default App;
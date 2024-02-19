import React from "react";

import Header from "./Header";
import Tab from "./Tab";

import "./App.css";
import Colors from "./Colors";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Tab>
        <Colors />
      </Tab>
    </div>
  );
};

export default App;

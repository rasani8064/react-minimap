import React from "react";
import ReactDOM from "react-dom";
import ArticleMinimap from "./components/ArticleMinimap";
import Article from "./components/Article";

import "./styles.css";

const App = () => (
  <div className="App">
    <ArticleMinimap>
      <Article />
    </ArticleMinimap>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

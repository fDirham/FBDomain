import React from "react";
import { Main } from "./Main/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

export function App(props) {
  return (
    <div className="base">
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;

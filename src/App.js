import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { MainHeader as Header } from "./components/MainHeader";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";

export function App(props) {
  // ids for navigation purposes found in respective component files
  return (
    <div>
      <Header />
      <div className="base">
        <div className="content">
          <About />
          <Contact />
          <div style={{ height: 60 }}></div>
          <Skills />
          <div style={{ height: 60 }}></div>
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;

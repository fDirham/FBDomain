import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { MainHeader as Header } from "./components/MainHeader";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Skills } from "./sections/Skills";

export function App(props) {
  // ids for navigation purposes found in respective component files
  return (
    <div>
      <Header />
      <div className="base">
        <div className="content">
          <About />
          <div style={{ height: 100 }}></div>
          <Contact />
          <div style={{ height: 100 }}></div>
          <Skills />
          <div style={{ height: 700 }}></div>

          <div id="experience-section">
            <h5>Experience</h5>
          </div>
          <div style={{ height: 700 }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { MainHeader as Header } from "./MainHeader";
import { About } from "./Sections/About";
import { Contact } from "./Sections/Contact";
import { Skills } from "./Sections/Skills";

export function Main(props) {
  // ids for navigation purposes found in respective component files
  return (
    <div>
      <Header />
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
  );
}

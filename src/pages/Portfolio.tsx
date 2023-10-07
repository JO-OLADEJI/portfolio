import React from "react";

// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// types
import { Pages } from "../types";

const Portfolio = (): JSX.Element => {
  return (
    <div>
      <Nav page={Pages.Portfolio} />

      <ul>
        <li>Skillset</li>
        <li>
          Link 3 projects 1. A web application 2. Video Editing reel 3. Mograph
          reel (of my practice projects)
        </li>
        <li>YouTube Channel & Latest Video</li>

        <li>Attach Downloadable CV (pdf and video)</li>
      </ul>

      <Footer />
    </div>
  );
};

export default Portfolio;

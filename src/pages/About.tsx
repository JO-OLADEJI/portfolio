import React from "react";

// components
import Nav from "../components/Nav";

// types
import { Pages } from "../types";

const About = (): JSX.Element => {
  return (
    <div>
      <h1>About</h1>
      <Nav page={Pages.About} />
      <ul>
        <li>Mission/Vision Statement</li>
        <li>"The Journey so Far"</li>
        <li>Personality test result</li>
        <li>Student at University of London</li>
        <li>Typing Speed</li>
        <li>Attach Downloadable CV (pdf and video)</li>
      </ul>
    </div>
  );
};

export default About;

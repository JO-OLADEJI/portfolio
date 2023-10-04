import React from "react";

// components
import Nav from "../components/Nav";

// types
import { Pages } from "../types";

const Contact = (): JSX.Element => {
  return (
    <div>
      <h1>Contact</h1>
      <Nav page={Pages.Contact} />
      <ul>
        <li>Form (for normal people)</li>
        <li>Terminal (for nerds)</li>
        <li>Canvas (for novelty)</li>
        <li>
          Schedule a meeting (for novelty) - Have a video on ethical guidelines
          of scheduling a meeting with me and have a custom built calendar
        </li>
      </ul>
    </div>
  );
};

export default Contact;

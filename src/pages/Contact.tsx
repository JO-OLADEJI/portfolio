import React from "react";

// components
import Nav from "../components/Nav";
import Form from "../components/Form";
import Terminal from "../components/Terminal";
import Canvas from "../components/Canvas";

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

      <Form />
      <Terminal />
      <Canvas />

      <section>
        <h3>Socials</h3>
      </section>
    </div>
  );
};

export default Contact;

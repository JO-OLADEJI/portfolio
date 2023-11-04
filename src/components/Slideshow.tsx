import React from "react";
import { createPortal } from "react-dom";

// styles
import { Outline } from "../styles/components/slideshow";

const Slideshow = (): JSX.Element | null => {
  const slideshowRoot = document.getElementById("slideshow");
  if (!slideshowRoot) return null;

  return createPortal(<Outline />, slideshowRoot);
};

export default Slideshow;

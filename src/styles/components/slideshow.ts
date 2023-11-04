import styled from "styled-components";

import slideshow1 from "../../assets/slideshow/slideshow-1.png";

export const Outline = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  opacity: 0.1;
  background-image: url(${slideshow1});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1;
`;

import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

export const Outline = styled.nav`
  padding: 1.5rem 0;
  position: relative;
`;

export const RouteOutline = styled.div<{ $isMenuOpen: boolean }>`
  display: ${isMobile ? "block" : "flex"};
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  aligh-items: center;
  overflow: hidden;
  transition: transform 0.5s ease-out;

  li {
    margin: ${isMobile ? "0" : "0 2rem"};
    list-style-type: none;
    font-weight: bold;
    font-size: ${isMobile ? "1.6rem" : "1.1rem"};
  }

  ${({ $isMenuOpen }) =>
    isMobile
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #ffffff10;
          padding: 2rem;
          padding-top: 10rem;
          z-index: 1;
          transform: ${$isMenuOpen ? "translateX(0)" : "translateX(-100%)"};

          li {
            margin-bottom: 1rem;
          }
        `
      : null};

  a {
    color: #6a6a6a;
    text-decoration: none;
  }
`;

export const Route = styled.li<{ $iscurrentroute: boolean }>`
  ${({ $iscurrentroute: iscurrentroute }) =>
    iscurrentroute
      ? css`
          a {
            color: black;
            cursor: s-resize;
          }
        `
      : null}
`;

export const BurgerMenu = styled.div<{ $isMenuOpen: boolean }>`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  width: 2rem;
  height: 1.6rem;
  z-index: 2;

  span {
    display: block;
    margin-bottom: 0.25rem;
    width: 100%;
    height: 0.35rem;
    background-color: black;
    border-radius: 0.5rem;
    transition: all 0.4s ease-out;
  }

  span:nth-child(1) {
    width: ${({ $isMenuOpen: isMenuOpen }) => (isMenuOpen ? "100%" : "70%")};
    transform-origin: top left;
    transform: ${({ $isMenuOpen: isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
  }

  span:nth-child(2) {
    opacity: ${({ $isMenuOpen: isMenuOpen }) => (isMenuOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    margin-left: auto;
    width: ${({ $isMenuOpen: isMenuOpen }) => (isMenuOpen ? "100%" : "70%")};
    transform-origin: bottom right;
    background-color: ${({ $isMenuOpen: isMenuOpen }) =>
      isMenuOpen ? "#00000050" : "black"};
    transform: ${({ $isMenuOpen: isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
  }
`;

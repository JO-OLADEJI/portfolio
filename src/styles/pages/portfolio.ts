import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

export const Outline = styled.div`
  height: 100vh;
  perspective: 1200px;
  overflow: hidden;
`;

export const ContentLayer = styled.div<{ $isMenuOpen: boolean }>`
  padding-top: 3rem;
  transform-style: preserve-3d;
  transition: filter 0.5s ease-out;
  filter: ${({ $isMenuOpen }) =>
    isMobile && $isMenuOpen ? "blur(10px)" : "none"};

  ${isMobile
    ? css`
        padding: 0;
        margin-top: 2rem;
      `
    : null}
`;

export const Display = styled.div`
  margin: ${isMobile ? "1rem" : "2rem"} auto;
  width: 47rem;
  height: 25rem;
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  padding: 1rem;
  padding-top: 2rem;
  font-weight: bold;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    transform: translateZ(7rem);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
    padding: 0 5rem;
    transform: translateZ(3rem);
  }

  ul {
    text-align: center;
    border: 2px solid #00000040;
    width: fit-content;
    margin: auto;
    margin-bottom: 2rem;
    position: relative;
    padding: 1rem 1rem 0.8rem 1rem;
    border-radius: 2rem;
    transform: translateZ(1rem);
    transform-style: preserve-3d;

    p {
      font-size: 0.8rem;
      margin-bottom: 0.3rem;
      position: absolute;
      top: 0;
      left: 50%;
      padding: 0 0.5rem;
      transform: translate(-50%, -50%);
      background-color: white;
      width: fit-content;
    }

    span {
      font-size: 1.2rem;
      display: inline-block;
      width: 11rem;
      transform: translateZ(2rem);
    }
  }

  ${isMobile
    ? css`
        width: 85%;
        height: 60vh;
        padding: 0.5rem;
        padding-top: 2rem;
        box-shadow: none;

        h3 {
          font-size: 1rem;
          padding: 0 1rem;
        }

        ul {
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;

          span {
            display: block;
            font-size: 1rem;
          }
        }
      `
    : null}

  a {
    text-align: center;
    text-decoration: none;
    width: 15rem;
    display: block;
    margin: auto;
    cursor: pointer;
    padding: 0.8rem 1rem;
    border: none;
    font-size: 1rem;
    color: #ffffff;
    background-color: #6a6a6a;
    border-radius: 3rem;
    transform: translateZ(10rem);
    transform-style: preserve-3d;
    transition: transform 0.3s ease-out, background-color 0.3s ease-out;

    &:hover {
      transform: translateZ(8rem);
      background-color: black;
    }

    &:hover p {
      transform: translateZ(0);
    }

    p {
      transform: translateZ(3rem);
      transition: transform 0.3s ease-out;
    }
  }
`;

export const ArrowUp = styled.div<{ $disabled: boolean }>`
  width: 3.5rem;
  height: 3.5rem;
  margin: auto;
  border-radius: 50%;
  padding: 0.5rem;
  transform: translateZ(3rem);
  transform-style: preserve-3d;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-out, background-color 0.3s ease-out;

  ${isMobile
    ? css`
        width: 2.5rem;
        height: 2.5rem;
      `
    : null}

  &:hover {
    background-color: #00000050;
    transform: translateZ(1.5rem);
  }

  &:hover img {
    transform: translateZ(0);
  }

  img {
    width: 100%;
    border-radius: 50%;
    transform: translateZ(2rem);
    transition: transform 0.3s ease-out;
  }
`;

export const ArrowDown = styled(ArrowUp)`
  transform: rotateZ(180deg) translateZ(3rem);

  &:hover {
    background-color: #00000050;
    transform: rotateZ(180deg) translateZ(1.5rem);
  }
`;

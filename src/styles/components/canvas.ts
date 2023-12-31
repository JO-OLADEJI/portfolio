import styled, { css, keyframes } from "styled-components";
import { isMobile } from "react-device-detect";

export const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin: ${isMobile ? "1.5rem 0" : "3rem 0"};
  ${!isMobile &&
  css`
    margin-bottom: 6rem;
  `}
`;

export const BoardOutline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  width: ${isMobile ? "90vw" : "60rem"};
  height: ${isMobile ? "70vh" : "30rem"};
  background-color: black;
  position: relative;
  border-radius: ${isMobile ? "0.5rem" : "1.1rem"};
`;

export const Board = styled.canvas`
  width: ${isMobile ? "96%" : "98%"};
  height: ${isMobile ? "97%" : "96%"};
  background-color: white;
  border-radius: ${isMobile ? "0.3rem" : "0.7rem"};
  cursor: crosshair;
`;

const spin = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
`;

export const Controls = styled.div<{ $isLoading: boolean }>`
  width: 3rem;
  height: 90%;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  button:disabled {
    cursor: not-allowed;
  }

  img {
    width: ${isMobile ? "1.2rem" : "1.6rem"};
    opacity: 0.5;
    transition: opacity 0.3s ease-out;

    ${({ $isLoading }) =>
      $isLoading &&
      css`
        animation: ${spin} 1s linear infinite;
        opacity: 1;
      `};
  }

  img:hover {
    opacity: 1;
  }
`;

export const Ink = styled.div<{ $isActive: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: 0.5rem auto;
  cursor: cell;

  ${({ $isActive }) =>
    $isActive &&
    css`
      border: 2px solid #fc740a;
    `};
`;

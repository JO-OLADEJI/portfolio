import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin: ${isMobile ? "1.5rem 0" : "3rem 0"};
`;

export const BoardOutline = styled.div`
  margin: 3rem auto;
  width: ${isMobile ? "90vw" : "60rem"};
  height: ${isMobile ? "70vh" : "30rem"};
  background-color: black;
  position: relative;
  border-radius: ${isMobile ? "0.5rem" : "1.1rem"};
`;

export const Board = styled.div`
  width: ${isMobile ? "96%" : "98%"};
  height: ${isMobile ? "97%" : "96%"};
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${isMobile ? "0.3rem" : "0.7rem"};
`;

export const Controls = styled.div`
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

  img {
    width: ${isMobile ? "1.2rem" : "1.6rem"};
    opacity: 0.6;
  }
`;

export const Ink = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: 0.5rem auto;
  cursor: cell;
`;

export const DarkInk = styled(Ink)`
  background-color: #000000;
`;

export const GreyInk = styled(Ink)`
  background-color: #7b7b7b;
`;

export const LightInk = styled(Ink)`
  background-color: #cacaca;
`;

import styled, { keyframes } from "styled-components";

export const Outline = styled.div`
  position: fixed;
  left: 3rem;
  bottom: 1.5rem;
  border: 2px solid #00000010;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: .5rem;
  padding-right: 2rem;
  transition: border .5s ease-out;

  &:hover {
    border: 2px solid black;
  }

  div {
    // border: 1px solid red;
    // width: fit-content;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
`;

export const Disc = styled.img`
  width: 6rem;
  animation: ${rotate} 4s linear infinite;
`;

export const Tonearm = styled.img`
  width: 4rem;
  position: relative;
  left: -2rem;
  bottom: 1.5rem;
`;

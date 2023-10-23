import styled, { keyframes, css } from "styled-components";

export const Outline = styled.div`
  position: fixed;
  left: 3rem;
  bottom: 1.5rem;
  border: 2px solid #00000010;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  transition: border 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid black;
  }

  div:last-child {
    width: 2rem;
    height: 2rem;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #cccccc;
    transition: background-color 0.3s ease-out;

    &:hover {
      background-color: #999999;
    }

    &:hover img {
      opacity: 1;
    }
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

export const Disc = styled.img<{ $isPlaying: boolean }>`
  width: 6rem;
  ${({ $isPlaying }) =>
    $isPlaying
      ? css`
          animation: ${rotate} 4s linear infinite;
        `
      : null}
`;

export const Tonearm = styled.img<{ $isPlaying: boolean }>`
  width: 4rem;
  position: relative;
  left: -2rem;
  bottom: 1.5rem;
  transform-origin: top right;
  transition: transform 0.5s linear;
  transform: ${({ $isPlaying }) =>
    $isPlaying ? "rotate(0deg)" : "rotate(-20deg)"};
`;

export const PlayPauseBtn = styled.img`
  width: 50%;
  opacity: 0.5;
  transition: opacity 0.3s ease-out;
`;

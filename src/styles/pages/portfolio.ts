import styled from "styled-components";

export const Outline = styled.div`
  height: 100vh;
  perspective: 1200px;
  overflow: hidden;
`;

export const ContentLayer = styled.div`
  padding-top: 5rem;
  transform-style: preserve-3d;
`;

export const DisplayScreen = styled.div`
  margin: 2rem auto;
  width: 47rem;
  height: 22rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;

  h1 {
    font-weight: bold;
    font-size: 5rem;
    transform: translateZ(10rem);
  }
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  display: block;
  margin: auto;
  border: none;
  transform: translateZ(5rem);

  img {
    border-radius: 50%;
    width: 3.5rem;
    padding: 1rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const ArrowDown = styled(ArrowButton)`
  transform: rotateZ(180deg) translateZ(5rem);
`;

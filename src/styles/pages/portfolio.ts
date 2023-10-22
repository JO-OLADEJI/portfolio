import styled from "styled-components";

export const Outline = styled.div`
  height: 100vh;
  perspective: 1200px;
  overflow: hidden;
`;

export const ContentLayer = styled.div`
  padding-top: 3rem;
  transform-style: preserve-3d;
`;

export const DisplayScreen = styled.div`
  margin: 2rem auto;
  width: 47rem;
  height: 25rem;
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;

  h1 {
    font-weight: bold;
    font-size: 5rem;
    transform: translateZ(7rem);
  }
`;

export const ArrowButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: auto;
  border-radius: 50%;
  padding: 0.5rem;
  transform: translateZ(3rem);
  transform-style: preserve-3d;
  cursor: pointer;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  transition: transform .3s ease-out, background-color .3s ease-out;

  &:hover {
    background-color: #00000050;
    transform: translateZ(4rem);
  }

  &:hover img {
    transform: translateZ(0);
  }

  img {
    width: 100%;
    border-radius: 50%;
    transform: translateZ(2rem);
    transition: transform .3s ease-out;
  }
`;

export const ArrowDown = styled(ArrowButton)`
  transform: rotateZ(180deg) translateZ(3rem);

  &:hover {
    background-color: #00000050;
    transform: rotateZ(180deg) translateZ(4rem);
  }
`;

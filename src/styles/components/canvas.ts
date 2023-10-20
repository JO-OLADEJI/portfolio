import styled from "styled-components";

export const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin-top: 3rem;
`;

export const BoardOutline = styled.div`
  margin: 3rem auto;
  width: 60rem;
  height: 30rem;
  background-color: black;
  position: relative;
`;

export const Board = styled.div`
  width: 98%;
  height: 96%;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
    width: 2.5rem;
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

import styled from "styled-components";

export const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin: 3rem 0;
`;

export const Interface = styled.div`
  margin: auto;
  width: 40rem;
  height: 25rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  text-align: left;
  padding: 0.2rem;
  font-size: 0.8rem;
  font-weight: bold;
  border: 1px solid black;

  .plain {
    font-weight: normal;
    color: black;
  }

  div {
    position: relative;
  }
`;

export const CmdInput = styled.textarea`
  width: 100%;
  height: 5rem;
  border: none;
  color: green;
  caret-color: black;
  position: relative;
  resize: none;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export const NewLine = styled.p`
  position: absolute;
  left: 0;
  top: 0;
`;
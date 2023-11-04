import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

export const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin: ${isMobile ? "1.5rem 0" : "3rem 0"};
  ${!isMobile &&
  css`
    margin-bottom: 10rem;
  `}
`;

export const Interface = styled.div`
  margin: auto;
  width: ${isMobile ? "90vw" : "40rem"};
  height: ${isMobile ? "70vh" : "25rem"};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  text-align: left;
  padding: 0.2rem;
  font-size: 0.8rem;
  font-weight: bold;
  border: 1px solid black;
  background-color: #f9f9f8;

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
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const NewLine = styled.p`
  position: absolute;
  left: 0;
  top: 0;
`;

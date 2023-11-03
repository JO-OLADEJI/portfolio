import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

export const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin: ${isMobile ? "1.5rem 0" : "3rem 0"};

  span {
    font-weight: bold;
  }
`;

export const FormElement = styled.form`
  margin: auto;
  margin-top: 3rem;
  width: fit-content;

  button {
    cursor: pointer;
  }

  div {
    width: ${isMobile ? "90vw" : "25rem"};
    position: relative;
    margin: 1rem 0;
  }

  input,
  textarea {
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1rem;
  }

  textarea {
    height: 12rem;
    resize: none;
  }

  textarea:focus + #text-count-form {
    background-color: #6a6a6a;
  }

  label {
    background-color: white;
    padding: 0 0.5rem;
    position: absolute;
    top: 0;
    left: 1.5rem;
    transform: translate(0, -50%);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const TextCount = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 0.8rem;
  color: #ffffff;
  background-color: #bbbbbb;
  border-radius: 1rem;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 0.4rem;
`;

export const DispatchButton = styled.button`
  padding: 0.8rem;
  border: none;
  background-color: #6a6a6a;
  color: #ffffff;
  width: 100%;
  border-radius: 2rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const MailInfo = styled.div`
  font-size: 0.8rem;
  margin-top: ${isMobile ? "2rem" : "1rem"};
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    margin-left: ${isMobile ? "0.5rem" : "1rem"};
    cursor: pointer;

    ${isMobile &&
    css`
      margin-top: 1rem;
    `}
  }

  img {
    width: 1rem;
  }
`;

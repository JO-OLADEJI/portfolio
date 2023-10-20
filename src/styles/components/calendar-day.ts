import styled from "styled-components";

export const Column = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: #f9f9f8;
  width: fit-content;

  p {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #00000070;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  span {
    display: inline-block;
    font-size: 0.5rem;
  }
`;

export const TimeBtn = styled.li<{ $disabled: boolean; $selected: boolean }>`
  list-style-type: none;
  border: 1px solid
    ${({ $selected: selected }) => (selected ? "black" : "#e8e8e8")};
  padding: 0.5rem 0.9rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: ${({ $selected: selected }) =>
    selected ? "black" : "#ffffff"};
  color: ${({ $selected: selected }) => (selected ? "#ffffff" : "#6a6a6a")};

  ${({ $disabled: disabled, $selected: selected }) =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 50%;
  `
      : !selected
      ? `
  &:hover {
    background-color: #bbbbbb;
    color: #ffffff;
  }
  `
      : null}
`;

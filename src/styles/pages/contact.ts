import styled from "styled-components";

export const ContactTabs = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.15rem;
`;

export const TabButton = styled.button<{ $selected: boolean }>`
  width: 12rem;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border: 1px solid
    ${({ $selected: selected }) => (selected ? "black" : "#e8e8e8")};
  font-size: 1rem;
  color: ${({ $selected: selected }) => (selected ? "#ffffff" : "#444444")};
  background-color: ${({ $selected: selected }) =>
    selected ? "black" : "#f9f9f8"};

  &:hover {
    ${({ $selected: selected }) =>
      !selected
        ? `
    background-color: #868686;
    border: 1px solid #868686;
    color: #ffffff;`
        : null}
  }

  &:nth-child(1) {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }

  &:last-child {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  p:last-child {
    font-size: 0.6rem;
    font-weight: bold;
  }
`;

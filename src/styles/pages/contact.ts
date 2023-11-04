import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

export const ContentWrapper = styled.div<{ $isMenuOpen: boolean }>`
  padding-top: ${isMobile ? "1.5rem" : "0"};
  transition: filter 0.5s ease-out;
  filter: ${({ $isMenuOpen }) =>
    isMobile && $isMenuOpen ? "blur(10px)" : "none"};
`;

export const ContactTabs = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 0.15rem;
  position: relative;
`;

export const TabButton = styled.button<{ $selected: boolean }>`
  display: ${({ $selected }) => (isMobile && !$selected ? "none" : "block")};
  width: ${isMobile ? "15rem" : "12rem"};
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

  p:last-child {
    font-size: 0.6rem;
    font-weight: bold;
  }

  ${isMobile
    ? css`
        border-radius: 2rem;
      `
    : css`
        &:nth-child(1) {
          border-top-left-radius: 2rem;
          border-bottom-left-radius: 2rem;
        }

        &:last-child {
          border-top-right-radius: 2rem;
          border-bottom-right-radius: 2rem;
        }
      `};
`;

export const DropdownBtn = styled.img`
  width: 2.1rem;
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translate(0, -50%) rotateZ(-90deg);
  background-color: #999999;
  border-radius: 50%;
  padding: 0.4rem;
  filter: invert(0.8);
`;

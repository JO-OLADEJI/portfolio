import styled, { keyframes, css } from "styled-components";
import { isMobile } from "react-device-detect";

export const ContentWrapper = styled.div<{ $isMenuOpen: boolean }>`
  margin-top: ${isMobile ? "3rem" : "1rem"};
  margin-bottom: ${isMobile ? "5rem" : "0"};
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 5rem;
  flex-wrap: wrap;
  transition: filter 0.5s ease-out;
  filter: ${({ $isMenuOpen }) =>
    isMobile && $isMenuOpen ? "blur(10px)" : "blur(0px)"};
`;

export const FingerPrintPad = styled.div`
  position: relative;
  width: ${isMobile ? "85%" : "30rem"};
  text-align: center;

  h5 {
    margin-bottom: 0.5rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  ul {
    margin-left: ${isMobile ? "0" : "2.8rem"};
    margin-bottom: ${isMobile ? "2rem" : "0"};
  }

  li {
    text-align: left;
    list-style-type: none;
    margin-bottom: 0.7rem;
    font-size: 1rem;
  }

  > div {
    text-align: right;
  }

  > div p {
    margin-right: 1rem;
  }
`;

export const DummyPrint = styled.div`
  position: absolute;
  top: ${isMobile ? "0" : "0.5rem"};
  right: ${isMobile ? "50%" : "1rem"};
  transform: translateX(${isMobile ? "50%" : "0"});
  width: 8rem;
  z-index: -2;

  img {
    width: 100%;
  }
`;

const scan = keyframes`
  0% {
    transform: translateY(-1rem);
  }

  100% {
    transform: translateY(10.5rem);
  }
`;

export const PrintScanner = styled.div`
  position: absolute;
  width: 100%;
  height: 2rem;
  background: linear-gradient(0deg, #ffffff50, #ffffff, #ffffff50);
  z-index: 1;
  animation: ${scan} 1s linear alternate;
  animation-iteration-count: ${isMobile ? "6" : "infinite"};
`;

export const Barcode = styled.img`
  width: 50%;
  margin-right: 1rem;
`;

export const JoshPrint = styled.video`
  width: ${isMobile ? "85%" : "27rem"};
  ${isMobile
    ? css`
        display: block;
        margin: auto;
      `
    : null}
`;

const hover = keyframes`
  0% {
    transform: translateY(-1.5rem);
  }

  100% {
    transform: translateY(1.5rem);
  }
`;

export const ScrollIndicator = styled.div<{ $show: boolean }>`
  width: 85%;

  img {
    display: block;
    margin: auto;
    filter: grayscale(100%) contrast(70%);
    opacity: ${({ $show }) => ($show ? "1" : "0")};
    transition: opacity 1s ease-in-out;
    animation: ${hover} 1s ease-in-out alternate infinite;
  }
`;

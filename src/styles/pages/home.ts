import styled from "styled-components";

export const Outline = styled.div`
  > div {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;

export const FingerPrintPad = styled.div`
  position: relative;
  width: 30rem;
  text-align: center;

  h5 {
    margin-bottom: 0.5rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  ul {
    margin-left: 2.8rem;
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

export const DummyPrint = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  width: 8rem;
  z-index: -1;
`;

export const Barcode = styled.img`
  width: 50%;
  margin-right: 1rem;
`;

export const FingerPrintImg = styled.img`
  width: 27rem;
`;

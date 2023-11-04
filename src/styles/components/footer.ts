import styled from "styled-components";

export const Outline = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  h1 {
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;
  }
`;

export const Copyright = styled.p`
  font-size: 0.7rem;
`;

export const Social = styled.div`
  a {
    opacity: 0.5;
    transition: opacity 0.3s ease-out;
  }

  a:hover {
    opacity: 1;
  }

  img {
    width: 1.5rem;
    filter: invert(100%);
  }
`;

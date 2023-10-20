import styled from "styled-components";

export const Outline = styled.nav`
  padding: 1.5rem 0;

  ul {
    display: flex;
    justify-content: center;
    aligh-items: center;
  }

  li {
    margin: 0 2rem;
    list-style-type: none;
    font-weight: bold;
    font-size: 1.1rem;
  }

  a {
    color: #6a6a6a;
    text-decoration: none;
  }
`;

export const Route = styled.li<{ $iscurrentroute: boolean }>`
  ${({ $iscurrentroute: iscurrentroute }) =>
    iscurrentroute
      ? `
      a {
      color: black;
      cursor: s-resize;
    }
  `
      : null}
`;

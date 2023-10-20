import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// types
import { Pages } from "../types";

const Outline = styled.nav`
  padding: 3rem 0;

  ul {
    display: flex;
    justify-content: center;
    aligh-items: center;
  }

  li {
    margin: 0 2rem;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

const Route = styled.li<{ $iscurrentroute: boolean }>`
  ${({ $iscurrentroute: iscurrentroute }) =>
    iscurrentroute
      ? `
    text-decoration: line-through;
    a {
      cursor: s-resize;
    }
  `
      : null}
`;

interface NavProps {
  page: Pages;
}

const Nav = ({ page }: NavProps): JSX.Element => {
  return (
    <Outline>
      <ul>
        <Route $iscurrentroute={page === Pages.Home ? true : false}>
          <Link to={"/"}>Home</Link>
        </Route>
        <Route $iscurrentroute={page === Pages.About ? true : false}>
          <Link to={"/about"}>About</Link>
        </Route>
        <Route $iscurrentroute={page === Pages.Portfolio ? true : false}>
          <Link to={"/portfolio"}>Portfolio</Link>
        </Route>
        <Route $iscurrentroute={page === Pages.Contact ? true : false}>
          <Link to={"/contact"}>Contact</Link>
        </Route>
      </ul>
    </Outline>
  );
};

export default Nav;

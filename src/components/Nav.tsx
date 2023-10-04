import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// types
import { Pages } from "../types";

const Outline = styled.nav`
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

const Route = styled.li<{ current: boolean }>`
  ${({ current }) => current ? `
    text-decoration: line-through;
    a {
      cursor: s-resize;
    }
  ` : null}
`;

interface NavProps {
  page: Pages;
}

const Nav = ({ page }: NavProps): JSX.Element => {
  return (
    <Outline>
      <ul>
        <Route current={page === Pages.Home}>
          <Link to={"/"}>Home</Link>
        </Route>
        <Route current={page === Pages.About}>
          <Link to={"/about"}>About</Link>
        </Route>
        <Route current={page === Pages.Portfolio}>
          <Link to={"/portfolio"}>Portfolio</Link>
        </Route>
        <Route current={page === Pages.Contact}>
          <Link to={"/contact"}>Contact</Link>
        </Route>
      </ul>
    </Outline>
  );
};

export default Nav;

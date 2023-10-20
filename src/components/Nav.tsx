import React from "react";
import { Link } from "react-router-dom";

// types
import { Pages } from "../types";

// styles
import { Outline, Route } from "../styles/components/nav";

interface NavProps {
  page: Pages;
}

const Nav = ({ page }: NavProps): JSX.Element => {
  const links: Pages[] = ["home", "portfolio", "contact"];

  return (
    <Outline>
      <ul>
        {links.map((link, index) => (
          <Route key={index} $iscurrentroute={page === link}>
            <Link to={`/${link !== "home" ? link : ""}`}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </Route>
        ))}
      </ul>
    </Outline>
  );
};

export default Nav;

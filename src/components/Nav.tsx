import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

// context
import { GlobalContext } from "../contexts/Global";

// components
import RecordPlayer from "./RecordPlayer";

// types
import { Pages } from "../types";

// styles
import {
  Outline,
  Route,
  BurgerMenu,
  RouteOutline,
} from "../styles/components/nav";

interface NavProps {
  page: Pages;
}

const Nav = ({ page }: NavProps): JSX.Element => {
  const globalContext = useContext(GlobalContext);
  const links: Pages[] = ["home", "portfolio", "contact"];

  return (
    <Outline>
      <RouteOutline $isMenuOpen={globalContext.isMenuOpen}>
        {links.map((link, index) => (
          <Route
            key={index}
            $iscurrentroute={page === link}
            onClick={() => globalContext.setIsMenuOpen(false)}
          >
            <Link to={`/${link !== "home" ? link : ""}`}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </Route>
        ))}
        {isMobile && <RecordPlayer />}
      </RouteOutline>
      {isMobile && (
        <BurgerMenu
          $isMenuOpen={globalContext.isMenuOpen}
          onClick={() => globalContext.setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </BurgerMenu>
      )}
    </Outline>
  );
};

export default Nav;

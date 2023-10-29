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
      <RouteOutline $isMenuOpen={globalContext.state.isMenuOpen}>
        {links.map((link, index) => (
          <Route
            key={index}
            $iscurrentroute={page === link}
            onClick={() =>
              globalContext.state.isMenuOpen &&
              globalContext.dispatch({ type: "TOGGLE_MENU" })
            }
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
          $isMenuOpen={globalContext.state.isMenuOpen}
          onClick={() => globalContext.dispatch({ type: "TOGGLE_MENU" })}
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

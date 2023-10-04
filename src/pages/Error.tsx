import React from "react";
import { useRouteError } from "react-router-dom";

// components
import Nav from "../components/Nav";

// types
import { Pages } from "../types";

const Error = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Nav page={Pages.Error404} />
      <h1>Sorry, an unexpected error has occured!</h1>
    </div>
  );
};

export default Error;

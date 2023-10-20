import React from "react";
import { useRouteError } from "react-router-dom";

// components
import Nav from "../components/Nav";

const Error = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Nav page={"error"} />
      <h1>Sorry, an unexpected error has occured!</h1>
    </div>
  );
};

export default Error;

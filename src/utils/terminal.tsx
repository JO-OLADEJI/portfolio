import React from "react";
import { Command, Log } from "../types";

export const getCommandResponse = (
  command: Command,
  payload: string | undefined
): Log => {
  // const tempC: Log = { type: "command", literal: "" };
  const tempR: Log = { type: "response", literal: "" };
  const tempE: Log = {
    type: "error",
    literal: "invalid command syntax :/",
  };

  if (command === "code") {
    //
  } else if (command === "decode") {
    //
  } else if (command === "memo config") {
    //
  } else if (command === "graph") {
    //
  } else if (command === "help") {
    if (!payload) {
      tempR.literal = [
        <span>
          - create a new message file: <b>code</b> message.txt
        </span>,
        <span>
          - store contact info in created file: <br />
          <b>&nbsp;&nbsp;memo config</b> guest.name = "uncle bob" <br />
          <b>&nbsp;&nbsp;memo config</b> guest.email = "unclebob@gmail.com"{" "}
          <br />
          <b>&nbsp;&nbsp;memo config</b> guest.message = "hello world!"
        </span>,
        <span>
          - view the content of your message file: <b>decode</b> message.txt
        </span>,
        <span>
          - send message file: <b>graph</b> message.txt
        </span>,
        <span>
          *to learn more about specific commands, run <b>help -command-</b> i.e{" "}
          <b>help decode</b>
        </span>,
      ];
      return tempR;
    } else {
      return tempE;
    }
  } else if (command === "clear") {
    if (payload) {
      return tempE;
    }
  }

  return tempR;
};

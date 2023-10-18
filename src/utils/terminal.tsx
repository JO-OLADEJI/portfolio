import { Command, Log, TerminalNode } from "../types";
import { CMD_RULE } from "../constants";

export const getCommandResponse = (
  command: Command,
  payload: string | undefined
): Log => {
  const CMD_RESPONSE: Log = { type: "response", literal: "" };
  const CMD_ERROR: Log = {
    type: "error",
    literal: "invalid command syntax :/",
  };

  if (!CMD_RULE[command].test(`${command} ${payload ?? ""}`)) return CMD_ERROR;

  switch (command) {
    case "code":
      // log `created new message file "$filename"`
      // terminalFiles[$filename] = { ...NEW_TERMINAL_MESSAGE }
      break;
    case "decode":
      // iterate over terminalFiles[$filename] and log out all keys and values
      break;
    case "memo config":
      break;
    case "graph":
      // make sure $filename exists
      // validate terminalFiles[$filename] with joi
      // hit api endpoint to send request
      break;
    case "help":
      CMD_RESPONSE.literal = getHelpResponse();
      return CMD_RESPONSE;
    case "clear":
      // send instruction to clear logs
      break;
    default:
      break;
  }

  return CMD_ERROR;
};

const getHelpResponse = (): TerminalNode[] => {
  return [
    <span>
      - create a new message file: <b>code</b> message.txt
    </span>,
    <span>
      - store contact info in created file: <br />
      <b>&nbsp;&nbsp;memo config</b> guest.name = "uncle bob" <br />
      <b>&nbsp;&nbsp;memo config</b> guest.email = "unclebob@gmail.com" <br />
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
};

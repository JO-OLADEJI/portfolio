import { TerminalNode } from "../types";

export const getHelpResponse = (): TerminalNode[] => {
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

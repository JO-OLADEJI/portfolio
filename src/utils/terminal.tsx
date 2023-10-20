import { TerminalNode } from "../types";

export const getHelpResponse = (): TerminalNode[] => {
  return [
    <span className="plain">
      <b>-</b> create a new message file: <b>code message.txt</b>
    </span>,
    <span className="plain">
      <b>-</b> store contact info in created file:
      <br />
      <b>&nbsp;&nbsp;memo config guest.name = "uncle bob"</b>
      <br />
      <b>&nbsp;&nbsp;memo config guest.email = "unclebob@gmail.com"</b>
      <br />
      <b>&nbsp;&nbsp;memo config guest.message = "hello world!"</b>
    </span>,
    <span className="plain">
      <b>-</b> view the content of your message file: <b>decode message.txt</b>
    </span>,
    <span className="plain">
      <b>-</b> send message file: <b>graph message.txt</b>
    </span>,
    <span className="plain">
      <b>-</b> clear the terminal screen: <b>clear</b>
    </span>,
  ];
};

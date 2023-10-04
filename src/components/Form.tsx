import React, { useState } from "react";
import styled from "styled-components";

const Outline = styled.div`
  text-align: center;
  margin-top: 5rem;

  form {
    margin: 1.5rem auto;
    width: fit-content;
  }

  form > div {
    width: 30rem;
    position: relative;
    margin: 1rem 0;
  }

  input,
  textarea {
    padding: 0.5rem 1rem;
    width: 100%;
  }

  textarea {
    height: 10rem;
    resize: none;
  }

  label {
    background-color: white;
    padding: 0 0.5rem;
    position: absolute;
    top: 0;
    left: 1.5rem;
    transform: translate(0, -50%);
    cursor: pointer;
  }

  span {
    font-weight: bold;
  }
`;

const Form = (): JSX.Element => {
  const [contactMail] = useState<string>("dejijolaoluwa@gmail.com");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleMailCopy = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    await navigator.clipboard.writeText(contactMail);
    alert(contactMail + " copied to clipboard!");
  };

  const handleMailSend = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO: async code here
  };

  return (
    <Outline>
      <div>
        <h1>Reach Out</h1>
        <p>primitive :(</p>
      </div>
      <form onSubmit={handleMailSend}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button>Dispatch</button>
      </form>
      <div>
        <p>
          Or send a mail directly to: <span>{contactMail}</span>{" "}
          <button onClick={handleMailCopy}>copy</button>
        </p>
      </div>
    </Outline>
  );
};

export default Form;

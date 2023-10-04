import React, { useState } from "react";
import styled from "styled-components";

const Outline = styled.div`
  margin: 2rem 0;
  text-align: center;

  form {
    margin: 1rem auto;
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
      <h1>Contact</h1>
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

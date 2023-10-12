import React, { useState } from "react";
import styled from "styled-components";
import Joi from "joi";

// types
import { ContactMediumProps } from "../types";

const Outline = styled.div<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin-top: 3rem;
`;

const FormElement = styled.form`
  margin: 3rem auto;
  width: fit-content;

  button {
    cursor: pointer;
  }

  div {
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
    height: 15rem;
    resize: none;
  }

  textarea:focus + #text-count-form {
    background-color: #6a6a6a;
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

const TextCount = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 0.8rem;
  color: #ffffff;
  background-color: #bbbbbb;
  border-radius: 1rem;
  font-size: 0.7rem;
  padding: 0.5rem;
`;

const schema = Joi.object({
  name: Joi.string().min(3).max(50),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  message: Joi.string().min(5).max(300),
});

const Form = ({ isActive }: ContactMediumProps): JSX.Element => {
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
    // 1. validate input values
    const { value, error } = schema.validate({ name, email, message });
    if (error) {
      return alert(error.details[0].message);
    }

    // 2. send the value object to contact@thecodeographer.com
    console.log({ mail: value });

    // 3. clear inputs
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Outline isSelected={isActive}>
      <div>
        <h1>Reach Out</h1>
        <p>primitive :/</p>
      </div>

      <FormElement onSubmit={handleMailSend}>
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
            onChange={(e) =>
              e.target.value.length <= 300 ? setMessage(e.target.value) : null
            }
          />
          <TextCount id="text-count-form">{message.length}/300</TextCount>
        </div>

        <button type="submit">Dispatch</button>
      </FormElement>

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

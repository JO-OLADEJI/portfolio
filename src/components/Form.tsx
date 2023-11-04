import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { isMobile } from "react-device-detect";

// config
import config from "../config.json";

// types
import { ContactMediumProps } from "../types";

// assets
import copyImg from "../assets/copy.png";

// styles
import {
  Outline,
  FormElement,
  TextCount,
  DispatchButton,
  MailInfo,
} from "../styles/components/form";

const schema = Joi.object({
  name: Joi.string().min(3).max(50),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  message: Joi.string().min(5).max(300),
});

const Form = ({ isActive }: ContactMediumProps): JSX.Element => {
  const contactMail = config.mail;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const handleMailCopy = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    await navigator.clipboard?.writeText(contactMail);
    alert(contactMail + " copied to clipboard!");
  };

  const handleMailSend = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { value, error } = schema.validate({ name, email, message });
    if (error) {
      return alert(error.details[0].message);
    }

    try {
      setDisableButton(true);
      const res = await axios.post(
        `${process.env.REACT_APP_CDGR_API}/api/contact/form`,
        {
          ...value,
          src: "form",
        }
      );
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // TODO: handle API failed state
      }
      setDisableButton(false);
    } catch (error) {
      console.error(error);
      setDisableButton(false);
    }
  };

  return (
    <Outline $isSelected={isActive}>
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

        <DispatchButton
          type="submit"
          disabled={disableButton}
          className="old-font"
        >
          Dispatch
        </DispatchButton>
      </FormElement>

      <MailInfo>
        <p>
          Or send a mail:{isMobile && <br />} <span>{contactMail}</span>
        </p>
        <button onClick={handleMailCopy}>
          <img src={copyImg} alt="copy" />
        </button>
      </MailInfo>
    </Outline>
  );
};

export default Form;

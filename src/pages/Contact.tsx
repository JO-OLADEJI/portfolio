import React, { useState } from "react";
import styled from "styled-components";

// components
import Nav from "../components/Nav";
import Form from "../components/Form";
import Terminal from "../components/Terminal";
import Canvas from "../components/Canvas";
import Meeting from "../components/Meeting";
import Footer from "../components/Footer";

// types
import { Pages } from "../types";

const ContactTabs = styled.div`
  padding: 0.5rem;
  width: fit-content;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const TabButton = styled.button<{ selected: boolean }>`
  width: 12rem;
  cursor: pointer;
  padding: 0.7rem 1.4rem;
  border: 1px solid ${({ selected }) => (selected ? "#868686" : "#e8e8e8")};
  background-color: white;
  font-size: 1.2rem;
  color: ${({ selected }) => (selected ? "#ffffff" : "#444444")};
  background-color: ${({ selected }) => (selected ? "#868686" : "#f9f9f8")};

  &:hover {
    ${({ selected }) =>
      !selected
        ? `
    background-color: #bababa;
    border: 1px solid #bababa;
    color: #ffffff;`
        : null}
  }

  &:nth-child(1) {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }

  &:last-child {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  p:last-child {
    font-size: 0.7rem;
  }
`;

type Tab = "meeting" | "terminal" | "form" | "canvas";

const Contact = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<Tab>("meeting");

  const handleTabClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tab: Tab
  ): void => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  return (
    <div>
      <Nav page={Pages.Contact} />

      <ContactTabs>
        <TabButton
          selected={currentTab === "meeting"}
          onClick={(e) => handleTabClick(e, "meeting")}
        >
          <p>Meeting</p>
          <p>for professionals.</p>
        </TabButton>
        <TabButton
          selected={currentTab === "terminal"}
          onClick={(e) => handleTabClick(e, "terminal")}
        >
          <p>Terminal</p>
          <p>for nerds ;D</p>
        </TabButton>
        <TabButton
          selected={currentTab === "form"}
          onClick={(e) => handleTabClick(e, "form")}
        >
          <p>Form</p>
          <p>primitive :/</p>
        </TabButton>
        <TabButton
          selected={currentTab === "canvas"}
          onClick={(e) => handleTabClick(e, "canvas")}
        >
          <p>Canvas</p>
          <p>for creatives :)</p>
        </TabButton>
      </ContactTabs>

      <Form isActive={currentTab === "form"} />
      <Terminal isActive={currentTab === "terminal"} />
      <Canvas isActive={currentTab === "canvas"} />
      <Meeting isActive={currentTab === "meeting"} />

      <Footer />
    </div>
  );
};

export default Contact;

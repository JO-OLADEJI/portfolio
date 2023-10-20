import React, { useState } from "react";

// components
import Nav from "../components/Nav";
import Form from "../components/Form";
import Terminal from "../components/Terminal";
import Canvas from "../components/Canvas";
import Meeting from "../components/Meeting";
// import Socials from "../components/Socials";

// types
import { Pages, ContactTab } from "../types";

// styles
import { ContactTabs, TabButton } from "../styles/pages/contact";

const Contact = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<ContactTab>("meeting");
  const tabs: { name: ContactTab; user: string }[] = [
    {
      name: "meeting",
      user: "for professionals.",
    },
    {
      name: "terminal",
      user: "for nerds ;D",
    },
    {
      name: "form",
      user: "primitive :/",
    },
    {
      name: "canvas",
      user: "for creatives :)",
    },
  ];

  const handleTabClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tab: ContactTab
  ): void => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  return (
    <div>
      <Nav page={Pages.Contact} />
      <ContactTabs>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            selected={currentTab === tab.name}
            onClick={(e) => handleTabClick(e, tab.name)}
          >
            <p className="old-font">{tab.name}</p>
            <p>{tab.user}</p>
          </TabButton>
        ))}
      </ContactTabs>

      <Form isActive={currentTab === "form"} />
      <Terminal isActive={currentTab === "terminal"} />
      <Canvas isActive={currentTab === "canvas"} />
      <Meeting isActive={currentTab === "meeting"} />
      {/* <Socials /> */}
    </div>
  );
};

export default Contact;

import React, { useState, useContext } from "react";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga";

// context
import { GlobalContext } from "../contexts/Global";

// components
import Nav from "../components/Nav";
import Form from "../components/Form";
import Terminal from "../components/Terminal";
import Canvas from "../components/Canvas";
import Meeting from "../components/Meeting";
import RecordPlayer from "../components/RecordPlayer";

// assets
import leftChevron from "../assets/left-chevron.png";

// types
import { ContactTab } from "../types";

// styles
import {
  ContactTabs,
  TabButton,
  ContentWrapper,
  DropdownBtn,
} from "../styles/pages/contact";

const Contact = (): JSX.Element => {
  ReactGA.pageview(window.location.pathname);
  const globalContext = useContext(GlobalContext);
  const [currentTab, setCurrentTab] = useState<ContactTab>("meeting");
  const [tabDisplayIndex, setTabDisplayIndex] = useState<number>(0);
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
    tab: ContactTab,
    tabIndex: number
  ): void => {
    e.preventDefault();
    if (!isMobile) {
      setCurrentTab(tab);
      setTabDisplayIndex(tabIndex);
    }
  };

  const handleTabTraverse = (): void => {
    if (isMobile) {
      setTabDisplayIndex(() => (tabDisplayIndex + 1) % tabs.length);
      setCurrentTab(tabs[tabDisplayIndex].name);
    }
  };

  return (
    <div>
      <Nav page={"contact"} />
      <ContentWrapper $isMenuOpen={globalContext.state.isMenuOpen}>
        <ContactTabs>
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              $selected={currentTab === tab.name}
              onClick={(e) => {
                handleTabClick(e, tab.name, index);
                ReactGA.event({
                  category: "Contact Tab Interaction",
                  action: "Tab Switch",
                  label: tab.name,
                });
              }}
            >
              <p className="old-font">{tab.name}</p>
              <p>{tab.user}</p>
            </TabButton>
          ))}
          {isMobile && (
            <DropdownBtn
              src={leftChevron}
              alt="dropdown"
              onClick={handleTabTraverse}
            />
          )}
        </ContactTabs>

        <Form isActive={currentTab === "form"} />
        <Terminal isActive={currentTab === "terminal"} />
        <Canvas isActive={currentTab === "canvas"} />
        <Meeting isActive={currentTab === "meeting"} />

        {!isMobile && <RecordPlayer />}
      </ContentWrapper>
    </div>
  );
};

export default Contact;

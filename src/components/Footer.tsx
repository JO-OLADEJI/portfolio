import React from "react";

// assets
import linkedinLogo from "../assets/logo/linkedin.png";
import twitterLogo from "../assets/logo/twitter.png";
import githubLogo from "../assets/logo/github.png";
import youtubeLogo from "../assets/logo/youtube.png";
import instragramLogo from "../assets/logo/instagram.png";

// styles
import { Copyright, Outline, Social } from "../styles/components/footer";

const Footer = (): JSX.Element => {
  const socials = [
    {
      name: "linkedin",
      logo: linkedinLogo,
      href: "https://www.linkedin.com/in/joshua-oladeji-594570200/",
    },
    {
      name: "twitter",
      logo: twitterLogo,
      href: "https://twitter.com/JO_OLADEJI",
    },
    {
      name: "github",
      logo: githubLogo,
      href: "https://github.com/JO-OLADEJI",
    },
    {
      name: "youtube",
      logo: youtubeLogo,
      href: "https://www.youtube.com/@JoshuaOladeji",
    },
    {
      name: "instagram",
      logo: instragramLogo,
      href: "https://www.instagram.com/jo_oladeji/",
    },
  ];

  return (
    <Outline>
      <h1 className="old-font">thecodeographer</h1>
      <div>
        {socials.map((media, index) => (
          <Social key={index}>
            <a href={media.href} target="_blank" rel="noreferrer">
              <img src={media.logo} alt={media.name} />
            </a>
          </Social>
        ))}
      </div>
      <Copyright>
        Copyright &copy; 2023 thecodeographer. All rights reserved.
      </Copyright>
    </Outline>
  );
};

export default Footer;

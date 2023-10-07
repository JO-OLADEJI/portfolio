import React from "react";
import styled from "styled-components";

// assets
import linkedIn from "../assets/logo/linkedin-logo.png";
import twitter from "../assets/logo/twitter-logo.png";
import instagram from "../assets/logo/instagram-logo.png";
import youtube from "../assets/logo/youtube-logo.png";

const Outline = styled.div`
  position: fixed;
  left: 3rem;
  bottom: 50%;

  img {
    width: 1.2rem;
    opacity: 0.5;
  }

  img:hover {
    opacity: 1;
  }

  div {
    margin-bottom: 1rem;
  }
`;

const Socials = (): JSX.Element => {
  return (
    <Outline>
      <a
        href="https://www.linkedin.com/in/joshua-oladeji-594570200/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <img src={linkedIn} alt="" />
        </div>
      </a>
      <a href="https://twitter.com/JO_OLADEJI" target="_blank" rel="noreferrer">
        <div>
          <img src={twitter} alt="" />
        </div>
      </a>
      <a
        href="https://www.instagram.com/jo_oladeji/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <img src={instagram} alt="" />
        </div>
      </a>
      <a
        href="https://www.youtube.com/@JoshuaOladeji"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <img src={youtube} alt="" />
        </div>
      </a>
    </Outline>
  );
};

export default Socials;

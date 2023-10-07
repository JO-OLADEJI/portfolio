import React, { useState } from "react";
import styled from "styled-components";

// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// assets / data
import headshotImg from "../assets/headshot.jpg";
import psychometricTraits from "../data/psychometric.json";

// types
import { Pages } from "../types";

const Outline = styled.div`
  text-align: center;

  > h1 {
    margin-bottom: 3rem;
  }
`;

const TraitsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65vw;
  max-width: 80rem;
  margin: auto;
  margin-bottom: 3rem;

  img {
    width: 20rem;
    border-radius: 10rem;
  }

  h1 {
    letter-spacing: 1.5rem;
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  p {
    text-align: left;
    margin: 0 5rem;
    font-size: 1.2rem;
    color: #444444;
  }
`;

const TraitsBody = styled.div`
  display: flex;
  width: 80vw;
  max-width: 100rem;
  margin: 2rem auto;
  margin-bottom: 6rem;

  h1 {
    font-size: 8rem;
    color: #7b7b7b;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
    margin: 0 3rem;
    margin-bottom: 1.5rem;
  }

  ul {
    margin-left: 3rem;
    text-align: left;
  }

  li {
    list-style-type: none;
    margin-bottom: 0.7rem;
  }
`;

const TemperamentOutline = styled.div`
  width: 50rem;
  height: 3rem;
  margin: auto;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const TemperamentBar = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => percent * 100}%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: relative;

  h3 {
    color: white;
    font-size: 2rem;
  }

  p {
    position: absolute;
    color: red;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const IntrovertBar = styled(TemperamentBar)`
  background-color: #7b7b7b;
  justify-content: flex-start;

  h3 {
    text-align: left;
  }

  p {
    left: 1rem;
    bottom: -2.5rem;
    color: #7b7b7b;
  }
`;

const ExtrovertBar = styled(TemperamentBar)`
  background-color: black;
  justify-content: flex-end;

  h3 {
    text-align: right;
  }

  p {
    right: 1rem;
    top: -2.5rem;
    color: black;
  }
`;

const OthersOutline = styled.div`
  width: 70vw;
  max-width: 80rem;
  margin: auto;
  margin-bottom: 10rem;

  h1 {
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    color: #555555;
  }

  iframe {
    margin-top: 4rem;
    width: 640px;
    height: 360px;
    border-radius: 2.5rem;
  }
`;

const About = (): JSX.Element => {
  const [introverted] = useState<number>(0.43); // from psychometric test result
  const [extroverted] = useState<number>(1 - introverted); // from psychometric test result

  return (
    <div>
      <Nav page={Pages.About} />

      <Outline>
        <h1>Psychometric Traits.</h1>
        <TraitsHeader>
          <img src={headshotImg} alt="a facecard of Joshua Oladeji" />
          <div>
            <h1>ENTJ</h1>
            <p>
              A strategic leader, motivated to organize initiatives for change.
              Quick to see opportunities for improvement and conceptualize new
              solutions. A natural leader, marshaling resources and developing
              long-range plans to accomplish a vision.
            </p>
          </div>
        </TraitsHeader>

        <TraitsBody>
          {psychometricTraits.map((trait, index) => (
            <div key={index}>
              <h1>{trait.letter}</h1>
              <h3>{trait.meaning}</h3>
              <p>{trait.desc}</p>
              <ul>
                {trait.style.map((style, index) => (
                  <li key={index}>- {style}</li>
                ))}
              </ul>
            </div>
          ))}
        </TraitsBody>
        <TemperamentOutline>
          <IntrovertBar percent={introverted}>
            <h3>{Math.round(introverted * 100)}%</h3>
            <p>introverted</p>
          </IntrovertBar>
          <ExtrovertBar percent={extroverted}>
            <h3>{Math.round(extroverted * 100)}%</h3>
            <p>extroverted</p>
          </ExtrovertBar>
        </TemperamentOutline>

        <OthersOutline>
          <h1>Others...</h1>
          <p>
            Apart from being a codeographer and left-handed, I'm a (remote)
            Computer Science student at University of London, typing at ~80WPM.
          </p>
          <iframe
            src="https://www.youtube.com/embed/BNOzD6HxLao?si=YdigdKfHzhsjodvm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={0}
            allowFullScreen={true}
          ></iframe>
        </OthersOutline>

        <Footer />
      </Outline>
    </div>
  );
};

export default About;

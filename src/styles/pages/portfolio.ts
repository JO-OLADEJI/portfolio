import styled from "styled-components";

export const Outline = styled.div`
  text-align: center;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 4rem;
  position: relative;

  > div {
    border: 1px solid black;
    height: 32rem;
    width: 25rem;
    border-bottom: none;
  }

  > div:nth-child(1),
  > div:nth-child(3) {
    height: 25rem;
    width: 20rem;
  }
`;

export const ProjectName = styled.h1`
  width: 90vw;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 5rem;
  background: linear-gradient(#ffffff00, #ffffff);
`;

export const ProjectDetails = styled.div`
  margin: 3rem 0;

  p {
    width: 50rem;
    margin: auto;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  button {
    margin: 3rem 0;
  }
`;

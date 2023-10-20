import styled from "styled-components";

export const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin: 3rem 0;
`;

export const Form = styled.form`
  width: fit-content;
  height: fit-content;

  div {
    width: 20rem;
    position: relative;
    margin: 1rem 0;
  }

  div:nth-child(3) {
    position: relative;
  }

  input,
  textarea {
    padding: 0.5rem 1rem;
    width: 100%;
  }

  textarea {
    height: 14rem;
    resize: none;
  }

  label {
    background-color: white;
    padding: 0 0.5rem;
    position: absolute;
    top: 0;
    left: 1.5rem;
    font-size: 0.7rem;
    font-weight: bold;
    transform: translate(0, -50%);
    cursor: pointer;
  }

  textarea:focus + #text-count {
    background-color: #6a6a6a;
  }
`;

export const ScheduleButton = styled.button`
  padding: 0.8rem;
  border: none;
  background-color: #6a6a6a;
  color: #ffffff;
  width: 100%;
  border-radius: 2rem;
  cursor: pointer;
`;

export const TextCount = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 0.8rem;
  color: #ffffff;
  background-color: #bbbbbb;
  border-radius: 1rem;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 0.4rem;
`;

export const Content = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const Calendar = styled.div`
  width: 41rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const CalendarBtn = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  background-color: transparent;
  border: none;

  img {
    width: 2.5rem;
    border-radius: 50%;
    padding: 0.6rem;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
    background-color: white;
  }

  img:hover {
    background-color: ${({ disabled }) => (disabled ? "#e8e8e8" : "#bbbbbb")};
  }
`;

export const LeftBtn = styled(CalendarBtn)`
  left: 0;
  transform: translate(-50%, -50%);

  img {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const RightBtn = styled(CalendarBtn)`
  right: 0;
  transform: translate(50%, -50%);

  img {
    rotate: 180deg;
    box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.3);
  }
`;

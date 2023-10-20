import React from "react";
import styled from "styled-components";

const Column = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: #f9f9f8;
  width: fit-content;

  p {
    margin-bottom: 0.7rem;
    font-size: 1.2rem;
  }

  h1 {
    font-size: 3rem;
  }

  span {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 0.8rem;
  }
`;

const TimeBtn = styled.li<{ $disabled: boolean; $selected: boolean }>`
  list-style-type: none;
  border: 1px solid
    ${({ $selected: selected }) => (selected ? "#6a6a6a" : "#e8e8e8")};
  padding: 0.7rem 1.4rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: ${({ $selected: selected }) =>
    selected ? "#6a6a6a" : "#ffffff"};
  color: ${({ $selected: selected }) => (selected ? "#ffffff" : "#6a6a6a")};

  ${({ $disabled: disabled, $selected: selected }) =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 50%;
  `
      : !selected
      ? `
  &:hover {
    background-color: #bbbbbb;
    color: #ffffff;
  }
  `
      : null}
`;

interface CalendarDayProps {
  day: string;
  date: number;
  booked: number[];
  timezone: string;
  meetingTimestamps: Date[];
  selectedTime: Date | null;
  reserveTime: (disabled: boolean, time: Date) => void;
}

const CalendarDay = ({
  day,
  date,
  booked,
  timezone,
  reserveTime,
  selectedTime,
  meetingTimestamps,
}: CalendarDayProps): JSX.Element => {
  return (
    <Column>
      <p>{day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()}</p>
      <h1>{date}</h1>
      <span>({timezone})</span>
      <ul>
        {meetingTimestamps.map((time, index) => (
          <TimeBtn
            key={index}
            $disabled={booked.includes(time.valueOf())}
            $selected={time.valueOf() === selectedTime?.valueOf()}
            onClick={() => reserveTime(booked.includes(time.valueOf()), time)}
          >
            {time.getHours()}:
            {time.getMinutes() < 10
              ? `0${time.getMinutes()}`
              : time.getMinutes()}
          </TimeBtn>
        ))}
      </ul>
    </Column>
  );
};

export default CalendarDay;

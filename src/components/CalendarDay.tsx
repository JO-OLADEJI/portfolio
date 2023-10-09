import React from "react";
import styled from "styled-components";

// types
import { Schedule } from "../types";

const Column = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: #f9f9f8;

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

  li {
    list-style-type: none;
    border: 1px solid #e8e8e8;
    padding: 0.7rem 1.4rem;
    border-radius: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    background-color: white;
    color: #6a6a6a;
  }

  li:hover {
    background-color: #6a6a6a;
    color: #ffffff;
  }
`;

interface CalendarDayProps {
  date: number;
  day: string;
  booked: Schedule[];
  timezone: string;
  meetingTimestamps: Date[];
}

const CalendarDay = ({
  day,
  date,
  booked,
  timezone,
  meetingTimestamps,
}: CalendarDayProps): JSX.Element => {
  return (
    <Column>
      <p>{day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()}</p>
      <h1>{date}</h1>
      <span>({timezone})</span>
      <ul>
        {meetingTimestamps.map((time, index) => (
          <li key={index}>
            {time.getHours()}:
            {time.getMinutes() < 10
              ? `0${time.getMinutes()}`
              : time.getMinutes()}
          </li>
        ))}
      </ul>
    </Column>
  );
};

export default CalendarDay;

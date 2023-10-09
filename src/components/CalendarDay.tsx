import React from "react";
import styled from "styled-components";

// types
import { Schedule, MORNING } from "../types";

const Column = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: #f9f9f8;

  p {
    margin-bottom: 0.7rem;
    font-size: 1.2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
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
}

const CalendarDay = ({ day, date, booked }: CalendarDayProps): JSX.Element => {
  return (
    <Column>
      <p>{day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()}</p>
      <h1>{date}</h1>
      <ul>
        {MORNING.map((time, index) => (
          <li key={index}>{booked.includes(time) ? "-" : time}</li>
        ))}
      </ul>
    </Column>
  );
};

export default CalendarDay;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import CalendarDay from "./CalendarDay";

// types
import { ContactMediumProps } from "../types";

const Outline = styled.div<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin-top: 2rem;

  form {
    width: fit-content;
    height: fit-content;
  }

  form > div {
    width: 25rem;
    position: relative;
    margin: 1rem 0;
  }

  input,
  textarea {
    padding: 0.5rem 1rem;
    width: 100%;
  }

  textarea {
    height: 20rem;
    resize: none;
  }

  label {
    background-color: white;
    padding: 0 0.5rem;
    position: absolute;
    top: 0;
    left: 1.5rem;
    transform: translate(0, -50%);
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const Calendar = styled.div`
  width: 50rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

interface MeetingDay {
  timestamp: number; // day start (midnight) timestamp
  date: number;
  day: string;
  schedule: Date[];
}

const getDayname = (day: number): string => {
  switch (day) {
    case 0:
      return "sun";
    case 1:
      return "mon";
    case 2:
      return "tue";
    case 3:
      return "wed";
    case 4:
      return "thu";
    case 5:
      return "fri";
    case 6:
      return "sat";
    default:
      return "NIL";
  }
};

const MEETING_TIME = {
  "10:00": 10 * 60 * 60 * 1000,
  "10:30": 10.5 * 60 * 60 * 1000,
  "11:00": 11 * 60 * 60 * 1000,
  "11:30": 11.5 * 60 * 60 * 1000,
  "12:00": 12 * 60 * 60 * 1000,
};

const Meeting = ({ isActive }: ContactMediumProps): JSX.Element => {
  const [timezone, setTimezone] = useState<string>("-");
  const [meetingDays, setMeetingDays] = useState<MeetingDay[]>([]);
  const [email, setEmail] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [memorandum, setMemorandum] = useState<string>("");

  useEffect(() => {
    const leeway: MeetingDay[] = [];
    const now = new Date();
    const timezoneOffset = Math.floor(now.getTimezoneOffset() / 60);

    if (timezoneOffset === 0) {
      setTimezone("GMT + 0");
    } else if (timezoneOffset < 0) {
      setTimezone("GMT + " + Math.abs(timezoneOffset));
    } else if (timezoneOffset > 0) {
      setTimezone("GMT - " + Math.abs(timezoneOffset));
    }

    const MILLISECONDS_IN_A_DAY = 60 * 60 * 24 * 1000;
    for (let i = 1; i <= 5; i++) {
      const currentDate = new Date(now.valueOf() + MILLISECONDS_IN_A_DAY * i);
      currentDate.setHours(0, 0, 0, 0);

      leeway.push({
        date: currentDate.getDate(),
        day: getDayname(currentDate.getDay()),
        timestamp: currentDate.valueOf(),
        schedule: [
          new Date(currentDate.valueOf() + MEETING_TIME["10:00"]),
          new Date(currentDate.valueOf() + MEETING_TIME["10:30"]),
          new Date(currentDate.valueOf() + MEETING_TIME["11:00"]),
          new Date(currentDate.valueOf() + MEETING_TIME["11:30"]),
          new Date(currentDate.valueOf() + MEETING_TIME["12:00"]),
        ],
      });
    }
    setMeetingDays(() => leeway);
  }, []);

  const handleMeetingSchedule = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO: async code here
  };

  return (
    <Outline isSelected={isActive}>
      <div>
        <h1>Schedule a Meeting</h1>
        <p>for professionals.</p>
      </div>

      <Content>
        <Calendar>
          {meetingDays.map((mDay, index) => (
            <CalendarDay
              key={index}
              date={mDay.date}
              day={mDay.day}
              booked={[]}
              timezone={timezone}
              meetingTimestamps={mDay.schedule}
            />
          ))}
        </Calendar>
        <form onSubmit={handleMeetingSchedule}>
          <div>
            <label htmlFor="email-1">Email</label>
            <input
              id="email-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="brand-1">Company/Brand</label>
            <input
              id="brand-1"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="memorandum-1">Memorandum</label>
            <textarea
              id="memorandum-1"
              value={memorandum}
              onChange={(e) => setMemorandum(e.target.value)}
            />
          </div>

          <button>Schedule</button>
        </form>
      </Content>
    </Outline>
  );
};

export default Meeting;

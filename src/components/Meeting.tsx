import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import CalendarDay from "./CalendarDay";

// assets
import leftChevron from "../assets/left-chevron.png";

// types, utils, constants
import { ContactMediumProps, MeetingDay } from "../types";
import { MEETING_TIME } from "../constants";
import { getDayname } from "../utils";

const Outline = styled.div<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin-top: 3rem;

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
  margin: 3rem 0;
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
    border: 1px solid #858585;
    padding: 0.3rem;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
    background-color: #e8e8e8;
  }

  img:hover {
    background-color: ${({ disabled }) => (disabled ? "#e8e8e8" : "#bbbbbb")};
  }
`;

const LeftBtn = styled(CalendarBtn)`
  left: 0;
  transform: translate(-50%, -50%);
`;

const RightBtn = styled(CalendarBtn)`
  right: 0;
  transform: translate(50%, -50%);

  img {
    rotate: 180deg;
  }
`;

const Meeting = ({ isActive }: ContactMediumProps): JSX.Element => {
  const [timezone, setTimezone] = useState<string>("-");
  const [meetingDays, setMeetingDays] = useState<MeetingDay[]>([]);
  const [selectedTime, setSelectedTime] = useState<Date>();
  const [email, setEmail] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [memorandum, setMemorandum] = useState<string>("");
  const [indexA, setIndexA] = useState<number>(0);
  const [indexB, setIndexB] = useState<number>(5);

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
    for (let i = 1; i <= 14; i++) {
      const currentDate = new Date(
        now.valueOf() + MILLISECONDS_IN_A_DAY + MILLISECONDS_IN_A_DAY * i
      );
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

  const scrollCalenderLeft = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (indexA > 0) {
      setIndexA(() => indexA - 1);
      setIndexB(() => indexB - 1);
    }
  };

  const scrollCalenderRight = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (indexB < 10) {
      setIndexA(() => indexA + 1);
      setIndexB(() => indexB + 1);
    }
  };

  const handleMeetingSchedule = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // TODO: async code here
    // 1. throw visual error if no time has been selected
    // 2. create an object containing the selected time, email, brand & memorandum
    // 3. send the object as a mail to contact@thecodeographer.com
  };

  const handleTimeReserve = (disabled: boolean, time: Date): void => {
    if (disabled) return;
    setSelectedTime(() => time);
  };

  return (
    <Outline isSelected={isActive}>
      <div>
        <h1>Schedule a Meeting</h1>
        <p>for professionals.</p>
      </div>

      <Content>
        <Calendar>
          <LeftBtn disabled={indexA === 0} onClick={scrollCalenderLeft}>
            <img src={leftChevron} alt="left" />
          </LeftBtn>
          {meetingDays
            .filter((mDay) => mDay.day !== "sat" && mDay.day !== "sun")
            .slice(indexA, indexB)
            .map((mDay, index) => (
              <CalendarDay
                key={index}
                date={mDay.date}
                day={mDay.day}
                booked={[]}
                timezone={timezone}
                selectedTime={selectedTime}
                meetingTimestamps={mDay.schedule}
                reserveTime={handleTimeReserve}
              />
            ))}
          <RightBtn disabled={indexB === 10} onClick={scrollCalenderRight}>
            <img src={leftChevron} alt="right" />
          </RightBtn>
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

          <button type="submit">Schedule</button>
        </form>
      </Content>
    </Outline>
  );
};

export default Meeting;

import React, { useState, useEffect } from "react";
import Joi from "joi";

// components
import CalendarDay from "./CalendarDay";

// assets
import leftChevron from "../assets/left-chevron.png";

// types, utils, constants
import { ContactMediumProps, MeetingDay } from "../types";
import { MEETING_TIME } from "../constants";
import {
  getDayname,
  addBookedTimestampsToDB,
  getBookedTimestampsFromDB,
} from "../utils";

// styles
import {
  Outline,
  Form,
  TextCount,
  Content,
  Calendar,
  LeftBtn,
  RightBtn,
  ScheduleButton,
} from "../styles/components/meeting";

const Meeting = ({ isActive }: ContactMediumProps): JSX.Element => {
  const [timezone, setTimezone] = useState<string>("-");
  const [meetingDays, setMeetingDays] = useState<MeetingDay[]>([]);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [bookedTimestamps, setBookedTimestamps] = useState<number[]>([]);
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

    const scheduledTimestamps = getBookedTimestampsFromDB();
    setMeetingDays(() => leeway);
    setBookedTimestamps(() => scheduledTimestamps);
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
    if (!selectedTime) {
      return alert("meeting time NOT selected!");
    }

    const formInput = { email, brand, memorandum };
    const { value, error } = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      brand: Joi.string().min(2).required(),
      memorandum: Joi.string().min(5).max(300),
    }).validate(formInput);

    if (error) {
      return alert(error.details[0].message);
    }
    value.meetingTime = selectedTime.toString();
    console.log({ mail: value });
    const scheduledTimestamps = addBookedTimestampsToDB(selectedTime);

    setBookedTimestamps(() => scheduledTimestamps);
    setSelectedTime(null);
    setEmail("");
    setBrand("");
    setMemorandum("");
  };

  const handleTimeReserve = (disabled: boolean, time: Date): void => {
    if (disabled) return;
    setSelectedTime(() => time);
  };

  return (
    <Outline $isSelected={isActive}>
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
                booked={bookedTimestamps}
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

        <Form onSubmit={handleMeetingSchedule}>
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
              onChange={(e) =>
                e.target.value.length <= 300
                  ? setMemorandum(e.target.value)
                  : null
              }
            />
            <TextCount id="text-count">{memorandum.length}/300</TextCount>
          </div>

          <ScheduleButton type="submit" className="old-font">
            Schedule
          </ScheduleButton>
        </Form>
      </Content>
    </Outline>
  );
};

export default Meeting;

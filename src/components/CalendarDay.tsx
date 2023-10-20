import React from "react";

// styles
import { Column, TimeBtn } from "../styles/components/calendar-day";

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
      <h1 className="old-font">{date}</h1>
      {/* <span>({timezone})</span> */}
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

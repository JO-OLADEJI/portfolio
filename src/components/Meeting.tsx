import React, { useState } from "react";
import styled from "styled-components";

// components
import CalendarDay from "./CalendarDay";

const Outline = styled.div`
  text-align: center;
  margin-top: 5rem;

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
  margin-top: 3rem;
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

const Meeting = (): JSX.Element => {
  const [data] = useState([
    { day: "Thu", date: 5 },
    { day: "Fri", date: 6 },
    { day: "Mon", date: 9 },
    { day: "Tue", date: 10 },
    { day: "Wed", date: 11 },
  ]);
  const [email, setEmail] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [memorandum, setMemorandum] = useState<string>("");

  const handleMeetingSchedule = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO: async code here
  };

  return (
    <Outline>
      <div>
        <h1>Schedule a Meeting</h1>
        <p>for professionals.</p>
      </div>

      <Content>
        <Calendar>
          {data.map((datum, index) => (
            <CalendarDay date={datum.date} day={datum.day} booked={[]} />
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

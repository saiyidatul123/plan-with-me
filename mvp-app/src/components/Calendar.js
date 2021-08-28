import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calendar.css";
import { format, subHours, startOfMonth } from "date-fns";
import moment from 'moment';
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";
import "@zach.codes/react-calendar/dist/calendar-tailwind.css";

const Calendar = () => {
  let defaultEvents = [
    { title: "Call John", date: subHours(new Date(), 2) },
    { title: "Call John", date: subHours(new Date(), 1) },
    { title: "Meeting with Bob", date: new Date() },
    { title: "Merdeka Day", date: new Date("2021-08-31") },
  ];
  let [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  let [events, setEvents] = useState(defaultEvents);
  let [input, setInput] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch("/events")
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
        console.log(events);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({
      ...input,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEvent();
    setInput({ date: "", title: "" });
  };

  const addEvent = () => {
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents([
          ...events,
          {
            id: data[data.length - 1].id,
            date: input.date,
            title: input.title,
          },
        ]);
      });
  };

  const deleteEvent = id => {
    fetch(`/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        // setEvents(events.filter(e => e.id !== id))
        setEvents(data);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={(date) => setCurrentMonth(date)}
      >
        <MonthlyNav />
        <MonthlyBody events={events}>
          <MonthlyDay
            renderDay={(data) =>
              data.map((item, index) => (
                <DefaultMonthlyEventItem
                  key={index}
                  title={item.title}
                  // Format the date here to be in the format you prefer
                  date={format(item.date, "k:mm")}
                />
              ))
            }
          />
        </MonthlyBody>
      </MonthlyCalendar>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <table className="table table-hover">
          <thead>
            <tr className="table-auto">
              <th>Date</th>
              <th>Event</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="10">
                <input
                  type="date"
                  name="date"
                  value={input.date}
                  onChange={(e) => handleChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  placeholder="What's your plan today?"
                  onChange={(e) => handleChange(e)}
                  style={{ width: "100%" }}
                />
              </td>
              <td></td>
            </tr>
            {events.map((e) => (
              <tr>
                <td>{}</td>
                <td>{e.title}</td>
                <td className="del-btn" style={{ width: "1%" }}onClick={()=>deleteEvent(e.id)}>&times;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Calendar;

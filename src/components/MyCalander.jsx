import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import calendarimage from "../assets/calendar-check-01.png";

function MyCalendar() {
  // Make sure date is always a valid Date object
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 bg-white rounded shadow">
      <Calendar
        onChange={setDate}
        value={date}
        className="mx-auto"
      />
      <div className=" flex justify-center mt-4">  
        <img src={calendarimage } alt="" />
      </div>
      <p className="mt-4 text-center text-gray-600">
        There are no activities for today
      </p>

    </div>
  );
}

export default MyCalendar;

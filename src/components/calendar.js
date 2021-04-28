import Utils from "../utils/utils";
import { useEffect, useState } from "react";
import DayHeader from "./day-header";
import DayGrid from "./day";
const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ calendarEvents }) => {
  let [currentMonthEvents, setCurrentMonthEvents] = useState([]);
  useEffect(() => {
    setCurrentMonthEvents(Utils.extractMonthEvent(calendarEvents));
  }, []);
  return (
    <>
      <DayHeader days={Days} />
      <DayGrid currentMonthEvents={currentMonthEvents} days={Days} />
    </>
  );
};
export default Calendar;

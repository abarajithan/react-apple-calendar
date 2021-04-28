import { useEffect, useState } from "react";
import Utils from "../utils/utils";
import Event from "./event";
const DayGrid = (props) => {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    let eventData = [];
    let startDay = Utils.getStartDayofMonth();
    let endDay = Utils.getEndDayofMonth();
    eventData = props.currentMonthEvents;
    for (let i = 0; i < startDay; i++) {
      eventData.unshift({
        date: null,
        events: []
      });
    }
    for (let i = 0; i < 7 - endDay; i++) {
      eventData.push({
        date: null,
        events: []
      });
    }
    setEvents(eventData);
  }, [props.currentMonthEvents]);
  let weekLength = new Array(
    Math.ceil(props.currentMonthEvents.length / 7)
  ).fill();
  return (
    <div>
      {weekLength.map((week, weekindex) => (
        <div key={weekindex} className="day-container">
          {events.slice(weekindex * 7, weekindex * 7 + 7).map((date) => (
            <>
              <div className="day">
                <span className="day-span">
                  {date.date && new Date(date.date).getDate()}
                </span>
                {date.events.map((event) => (
                  <Event event={event} />
                ))}
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};
export default DayGrid;

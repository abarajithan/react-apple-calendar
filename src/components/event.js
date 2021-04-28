import Utils from "../utils/utils";

const Event = ({ event }) => {
  return event.time !== "all_day" ? (
    <div className="event-details">
      {event.accepted ? (
        <div className="eventname ">
          <span className="green"></span>
          {event.name}
        </div>
      ) : (
        <div className="eventname ">
          <span className="grey"></span>
          {event.name}
        </div>
      )}
      <div className="event-time">{Utils.formatTime(event.time)}</div>
    </div>
  ) : (
    <div className="eventname">
      {event.accepted ? (
        <span className="green-allday">{event.name}</span>
      ) : (
        <span className="grey-allday">{event.name}</span>
      )}
    </div>
  );
};

export default Event;

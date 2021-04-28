const DayHeader = (props) => {
  return (
    <div className="day-header-container">
      {props.days.map((day, index) => (
        <div key={index} className="day-label">
          {day}
        </div>
      ))}
    </div>
  );
};

export default DayHeader;

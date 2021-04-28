import "./styles.css";
import calendarEvents from "./metadata.json";
import Calendar from "./components/calendar";

export default function App() {
  return (
    <div className="App">
      <h1>April 2021</h1>
      <Calendar calendarEvents={calendarEvents} />
    </div>
  );
}

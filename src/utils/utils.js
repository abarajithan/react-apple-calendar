import { intlFormat } from "date-fns";

export const extractMonthEvent = (data) => {
  let month = new Date().getMonth() + 1;
  if (month <= 9) {
    month = "0" + month;
  }
  let year = new Date().getFullYear();
  let filteredData = data.filter((day) => {
    let dateSplitArray = day.date.split("-");
    return (
      dateSplitArray[0] === year.toString() &&
      dateSplitArray[1] === month.toString()
    );
  });
  return filteredData;
};

export const getStartDayofMonth = () => {
  let today = new Date().getDate() - 1;
  let startDay = new Date().getTime() - today * (24 * 60 * 60 * 1000);
  return new Date(startDay).getDay();
};

export const getEndDayofMonth = () => {
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  return new Date(year, month, 0).getDay();
};

export const formatTime = (date) => {
  return intlFormat(new Date(date), {
    hour: "numeric",
    hour12: true
  });
};

const Utils = {
  extractMonthEvent: extractMonthEvent,
  getStartDayofMonth: getStartDayofMonth,
  getEndDayofMonth: getEndDayofMonth,
  formatTime: formatTime
};

export default Utils;

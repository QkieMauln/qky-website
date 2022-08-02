import dayjs from "dayjs";

class DateParse {
  timestamp: number = new Date().valueOf();

  constructor(time?: number) {
    if (time) this.timestamp = time;
  }

  date() {
    return dayjs(this.timestamp).format("D MMM, YYYY");
  }

  time() {
    return dayjs(this.timestamp).format("hh:mm a");
  }

  full() {
    return dayjs(this.timestamp).format("hh:mm a D MMM, YYYY");
  }
}

export default DateParse;

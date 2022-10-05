interface Calendar {
  name: string;
  addEvents(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements CloudCalendar {
  constructor(public name: string) {}

  addEvents(): void {}

  removeEvent(): void {}

  sync(): void {}
}

let creatCalendar = (calendar: Calendar): void => {
  console.log("creating ", calendar)
}

let calendar: Calendar = {
  name: "google",
  addEvents() {
    console.log("add events")
  },
  removeEvent() {
    console.log("remove events")
  }
}

creatCalendar(calendar);

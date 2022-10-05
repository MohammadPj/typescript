"use strict";
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvents() { }
    removeEvent() { }
    sync() { }
}
let creatCalendar = (calendar) => {
    console.log("creating ", calendar);
};
let calendar = {
    name: "google",
    addEvents() {
        console.log("add events");
    },
    removeEvent() {
        console.log("remove events");
    }
};
creatCalendar(calendar);
//# sourceMappingURL=index.js.map
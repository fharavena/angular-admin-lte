import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGrigPlugin from "@fullcalendar/timegrid";
import bootstrap from "@fullcalendar/bootstrap";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [bootstrap, dayGridPlugin];
  calendarWeekends = true;
  calendarTheme = "bootstrap";

  calendarHeader = {
    left: "prev,next",
    center: "title",
    right: "today",
  };
  calendarLocale = "es";
  calendarDay = 1;

  calendarEventos = {
    events: [
      { title: "20 pruebas", date: "2020-04-01" },
      { title: "20 pruebas", date: "2020-04-02" },
      { title: "26 pruebas", date: "2020-04-28" },
    ],
    textColor: "#fff",
    backgroundColor: "#28a745",
    borderColor: "#00a65a",
  };

  constructor() {}

  ngOnInit(): void {}
}

import { IAppointment } from "@models/appointment.interface";
import isEmpty from "lodash/isEmpty";

const today = new Date().toISOString().split("T")[0];
const fastDate = getPastDate(4);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split("T")[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays)
    .toISOString()
    .split("T")[0];
}

export const CATEGORIES = [
  {
    name: "barba",
  },
  {
    name: "cabelo",
  },
  {
    name: "unhas",
  },
  {
    name: "sobrancelhas e cilios",
  },
  {
    name: "skin care",
  },
  {
    name: "podologia",
  },
  {
    name: "maquiagem",
  },
  {
    name: "outros",
  },
];

export const APPOINTMENTS: IAppointment[] = [
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Corte",
    clientName: "George Balliol",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: new Date().getHours().toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Corte e Barba",
    clientName: "Robert Hanover (Bob)",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 1).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Barba",
    clientName: "Edward Normandy",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 2).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Barba",
    clientName: "Harry Alpin",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 3).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Corte",
    clientName: "William Bruce",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 4).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Corte e Barba",
    clientName: "Henry Blois (Heinz)",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 5).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Corte",
    clientName: "John Plantagenet (Gino)",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 6).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Barba",
    clientName: "James Stuart (Jimmy)",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 7).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Corte",
    clientName: "Charles Angevin (Chas)",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 8).toLocaleString() + ":00",
    status: "",
  },
  {
    id: new Date().toString() + Math.random().toString(),
    serviceType: "Corte",
    clientName: "Arthur Stewart (Art)",
    serviceDate: new Date().toISOString().split("T")[0],
    serviceTime: (new Date().getHours() + 9).toLocaleString() + ":00",
    status: "",
  },
];

export const AGENDA = [
  {
    title: "2023-04-25",
    data: APPOINTMENTS,
  },
  {
    title: "2023-04-26",
    data: [{}],
  },
  {
    title: "2023-04-27",
    data: [APPOINTMENTS[0], APPOINTMENTS[1], APPOINTMENTS[2], APPOINTMENTS[3]],
  },
  {
    title: "2023-04-28",
    data: [APPOINTMENTS[0]],
  },
  {
    title: "2023-04-29",
    data: [{}],
  },
  {
    title: "2023-04-30",
    data: [{}],
  },
  {
    title: "2023-05-01",
    data: [{}],
  },
  {
    title: "2023-05-02",
    data: [{}],
  },
  {
    title: "2023-05-03",
    data: [{}],
  },
  {
    title: "2023-05-04",
    data: [{}],
  },
  {
    title: "2023-05-05",
    data: [{}],
  },
  {
    title: "2023-05-06",
    data: [{}],
  },
];

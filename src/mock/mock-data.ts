import { IAppointment } from "@models/appointment.interface";

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

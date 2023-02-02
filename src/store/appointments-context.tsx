import { APPOINTMENTS } from "@mock/mock-data";
import { createContext, useReducer } from "react";

export const AppointmentsContext = createContext({
  appointments: [],
  addAppointment: ({ serviceName, clientName, date, time }) => {},
  setAppointments: (appointments) => {},
  deleteAppointment: (id) => {},
  updateAppointment: (id, { serviceName, clientName, date, time }) => {},
});

function appointmentReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updatableAppointmentIndex = state.findIndex(
        (appointment) => appointment.id === action.payload.id
      );
      const updatableAppointment = state[updatableAppointmentIndex];
      const updateItem = { ...updatableAppointment, ...action.payload.data };
      const updatedAppointments = [...state];
      updatedAppointments[updatableAppointmentIndex] = updateItem;
      return updatedAppointments;
    case "DELETE":
      return state.filter((appointment) => appointment.id !== action.payload);
    default:
      return state;
  }
}

function AppointmentsContextProvider({ children }) {
  const [appointmentsState, dispatch] = useReducer(appointmentReducer, []);

  function addAppointment(appointmentData) {
    dispatch({ type: "ADD", payload: appointmentData });
  }

  function setAppointments(appointments) {
    dispatch({ type: "SET", payload: appointments });
  }

  function deleteAppointment(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateAppointment(id, appointmentData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: appointmentData } });
  }

  const value = {
    appointments: appointmentsState,
    addAppointment: addAppointment,
    setAppointments: setAppointments,
    deleteAppointment: deleteAppointment,
    updateAppointment: updateAppointment,
  };

  return (
    <AppointmentsContext.Provider value={value}>
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsContextProvider;

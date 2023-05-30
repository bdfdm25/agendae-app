import { SCHEDULES } from "@mock/mock-data";
import { createContext, useReducer } from "react";

export const SchedulesContext = createContext({
  schedules: [],
  addSchedule: ({ serviceName, clientName, date, time }) => {},
  setSchedules: (schedules) => {},
  deleteSchedule: (id) => {},
  updateSchedule: (id, { serviceName, clientName, date, time }) => {},
});

function scheduleReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      return action.payload;
    case "UPDATE":
      const updatableScheduleIndex = state.findIndex(
        (schedule) => schedule.id === action.payload.id
      );
      const updatableSchedule = state[updatableScheduleIndex];
      const updateItem = { ...updatableSchedule, ...action.payload.data };
      const updatedSchedules = [...state];
      updatedSchedules[updatableScheduleIndex] = updateItem;
      return updatedSchedules;
    case "DELETE":
      return state.filter((schedule) => schedule.id !== action.payload);
    default:
      return state;
  }
}

function SchedulesContextProvider({ children }) {
  const [schedulesState, dispatch] = useReducer(scheduleReducer, []);

  function addSchedule(scheduleData) {
    dispatch({ type: "ADD", payload: scheduleData });
  }

  function setSchedules(schedules) {
    dispatch({ type: "SET", payload: schedules });
  }

  function deleteSchedule(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateSchedule(id, scheduleData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: scheduleData } });
  }

  const value = {
    schedules: schedulesState,
    addSchedule: addSchedule,
    setSchedules: setSchedules,
    deleteSchedule: deleteSchedule,
    updateSchedule: updateSchedule,
  };

  return (
    <SchedulesContext.Provider value={value}>
      {children}
    </SchedulesContext.Provider>
  );
}

export default SchedulesContextProvider;

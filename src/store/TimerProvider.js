import React, { useReducer } from "react";

import TimerContext from "./timer-context";

const timerReducer = (state, action) => {
  const timerState = { ...state };

  if (action.type === "DECREASE_TIMER") {
    return { timer: (timerState.timer -= 1), isRunning: timerState.isRunning };
  }

  if (action.type === "STOP_TIMER") {
    return {
      timer: timerState.timer,
      isRunning: (timerState.isRunning = false),
    };
  }

  if (action.type === "RESTART_TIMER") {
    return { timer: action.time, isRunning: timerState.isRunning };
  }

  if (action.type === "DELETE_TIMER") {
    return { timer: timerState.timer, isRunning: false };
  }

  return timerState;
};

const TimerProvider = (props) => {
  const initialState = {
    timer: props.time * 60,
    isRunning: true,
  };
  const [timerState, dispatchTimer] = useReducer(timerReducer, initialState);

  const decreaseTimer = () => {
    dispatchTimer({ type: "DECREASE_TIMER" });
  };

  const stopTimer = () => {
    dispatchTimer({ type: "STOP_TIMER" });
  };

  const restartTimer = (time) => {
    dispatchTimer({ type: "RESTART_TIMER", time: time * 60 });
  };

  const deleteTimer = () => {
    dispatchTimer({ type: "DELETE_TIMER" });
  };

  const timerContext = {
    timer: timerState.timer,
    isRunning: timerState.isRunning,
    decrease: decreaseTimer,
    stop: stopTimer,
    restart: restartTimer,
    delete: deleteTimer,
  };

  return (
    <TimerContext.Provider value={timerContext}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;

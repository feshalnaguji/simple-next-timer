import React from "react";

const TimerContext = React.createContext({
  timer: 0,
  isRunning: false,
});

export default TimerContext;

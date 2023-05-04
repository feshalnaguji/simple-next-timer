import { useEffect, useState, useReducer } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./Timer.module.css";

const timerReducer = (state, action) => {
  if (action.type === "DECREASE_TIMER") {
    return { timer: state.timer - 1, isRunning: state.isRunning };
  }

  if (action.type === "STOP_TIMER") {
    return { timer: state.timer, isRunning: false };
  }

  if (action.type === "RESTART_TIMER") {
    return { timer: action.val, isRunning: state.isRunning };
  }

  if (action.type === "DELETE_TIMER") {
    return { timer: state.timer, isRunning: null };
  }

  return { timer: state.timer, isRunning: state.isRunning };
};

const Timer = (props) => {
  // const [timer, setTimer] = useState(props.time * 60);
  // const [isRunning, setIsRunning] = useState(true);
  const [timerState, dispatchTimer] = useReducer(timerReducer, {
    timer: props.time * 60,
    isRunning: true,
  });

  useEffect(() => {
    if (timerState.timer === 0) {
      dispatchTimer({ type: "STOP_TIMER" });
      // setIsRunning(false);
    }

    const counter = setTimeout(() => {
      dispatchTimer({ type: "DECREASE_TIMER" });
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, [timerState]);

  const resetTimerHandler = () => {
    dispatchTimer({ type: "RESTART_TIMER", val: props.time * 60 });
  };

  const deleteTimerHandler = () => {
    dispatchTimer({ type: "DELETE_TIMER" });
    dispatchTimer({ type: "STOP_TIMER" });
  };

  let day = String(Math.floor(timerState.timer / (60 * 60 * 24))).padStart(
    2,
    "0"
  );
  let hour = String(Math.floor((timerState.timer / 3600) % 24)).padStart(
    2,
    "0"
  );
  let minutes = String(Math.floor((timerState.timer / 60) % 60)).padStart(
    2,
    "0"
  );
  let seconds = String(Math.floor(timerState.timer % 60)).padStart(2, "0");

  return (
    <>
      {timerState.isRunning && (
        <Card>
          <div className={classes.timer}>
            <label className={classes.label}>
              {day}:{hour}:{minutes}:{seconds}
            </label>
            <Button onClick={resetTimerHandler}>Reset Timer</Button>
            {/* <button className={classes.btn} onClick={resetTimerHandler}>
              Reset Timer
            </button> */}
            <Button onClick={deleteTimerHandler}>Delete Timer</Button>
            {/* <button className={classes.btn} onClick={deleteTimerHandler}>
              Delete Timer
            </button> */}
          </div>
        </Card>
      )}
    </>
  );
};

export default Timer;

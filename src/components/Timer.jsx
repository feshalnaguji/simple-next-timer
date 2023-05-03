import { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import classes from "./Timer.module.css";

const Timer = (props) => {
  const [timer, setTimer] = useState(props.time * 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (timer === 0) {
      setIsRunning(false);
    }

    const counter = setTimeout(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, [timer]);

  const resetTimerHandler = () => {
    setTimer(props.time * 60);
  };

  const deleteTimerHandler = () => {
    setTimer(null);
    setIsRunning(false);
  };

  let day = String(Math.floor((timer / (60 * 60 * 24)) % 30)).padStart(2, "0");
  let hour = String(Math.floor((timer / 3600) % 24)).padStart(2, "0");
  let minutes = String(Math.floor((timer / 60) % 60)).padStart(2, "0");
  let seconds = String(Math.floor(timer % 60)).padStart(2, "0");

  return (
    <>
      {isRunning && (
        <Card>
          <div className={classes.timer}>
            <label className={classes.label}>
              {day}:{hour}:{minutes}:{seconds}
            </label>
            <button className={classes.btn} onClick={resetTimerHandler}>
              Reset Timer
            </button>
            <button className={classes.btn} onClick={deleteTimerHandler}>
              Delete Timer
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Timer;

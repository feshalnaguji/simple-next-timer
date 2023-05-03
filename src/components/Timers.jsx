import { Fragment } from "react";
import Timer from "./Timer";

import classes from "./Timers.module.css";

const Timers = (props) => {
  let allTimers = [];

  for (let i = 1; i <= props.timers; i++) {
    allTimers.push(<Timer key={i} time={i} />);
  }

  return (
    <Fragment>
      <div className={classes.container}>{allTimers}</div>
    </Fragment>
  );
};

export default Timers;

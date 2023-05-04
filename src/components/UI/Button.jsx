import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;

import classes from "./Home.module.css";

const Home = (props) => {
  return <div className={classes.home}>{props.children}</div>;
};

export default Home;

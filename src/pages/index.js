import Link from "next/link";
import Home from "@/components/Home.jsx";
import classes from "./index.module.css";

const HomePage = ({ types }) => {
  return (
    <Home>
      {types.map((type) => (
        <Link key={type.type} href={`/timers/${type.type}-timer`}>
          <button className={classes.btn}>{type.text}</button>
        </Link>
      ))}
    </Home>
  );
};

export default HomePage;

export function getStaticProps() {
  return {
    props: {
      types: [
        {
          type: "seconds",
          text: "Go to seconds timer",
        },
        {
          type: "minute",
          text: "Go to minutes, seconds timer",
        },
        {
          type: "hour",
          text: "Go to hour, minutes, second timer",
        },
        {
          type: "day",
          text: "Go to day, hour, minute, seconds, timer",
        },
      ],
    },
  };
}

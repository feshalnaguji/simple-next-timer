import Timers from "@/components/Timers.jsx";

const HourTimersPage = ({ timers }) => {
  return <Timers timers={timers} />;
};

export default HourTimersPage;

export function getStaticProps() {
  return {
    props: {
      timers: 30,
    },
    revalidate: 1,
  };
}

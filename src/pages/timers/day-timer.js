import Timers from "@/components/Timers.jsx";

const DayTimersPage = ({ timers }) => {
  return <Timers timers={timers} />;
};

export default DayTimersPage;

export function getStaticProps() {
  return {
    props: {
      timers: 40,
    },
    revalidate: 1,
  };
}

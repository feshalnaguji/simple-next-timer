import Timers from "@/components/Timers.jsx";

const SecondsTimersPage = ({ timers }) => {
  return <Timers timers={timers} />;
};

export default SecondsTimersPage;

export function getStaticProps() {
  return {
    props: {
      timers: 10,
    },
    revalidate: 1,
  };
}

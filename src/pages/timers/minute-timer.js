import Timers from "@/components/Timers.jsx";

const MinuteTimersPage = ({ timers }) => {
  return <Timers timers={timers} />;
};

export default MinuteTimersPage;

export function getStaticProps() {
  return {
    props: {
      timers: 20,
    },
    revalidate: 1,
  };
}

import Timer from "@/components/Timer";

const TimerPage = ({ timer }) => {
  return <Timer time={timer} />;
};

export default TimerPage;

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          timer: "1",
        },
      },
    ],
    fallback: "blocking",
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      timer: params.timer,
    },
  };
}

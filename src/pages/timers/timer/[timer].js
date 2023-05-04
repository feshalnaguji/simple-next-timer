import Timer from "@/components/Timer";

const TimerPage = ({ timer }) => {
  return <Timer time={timer} />;
};

export default TimerPage;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          timer: "1",
        },
      },
      {
        params: {
          timer: "1000",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      timer: params.timer,
    },

    revalidate: 1,
  };
}

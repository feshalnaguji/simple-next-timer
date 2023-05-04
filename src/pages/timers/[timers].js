import Timers from "@/components/Timers";

const TimersPage = ({ timers }) => {
  return <Timers timers={timers} />;
};

export default TimersPage;

export async function getStaticPaths() {
  let allPaths = [];

  for (let i = 1; i <= 10000; i++) {
    allPaths.push({
      params: {
        timers: `"${i}"`,
      },
    });
  }

  return {
    paths: allPaths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      timers: params.timers,
    },

    revalidate: 1,
  };
}

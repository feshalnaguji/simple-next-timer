import Timers from "@/components/Timers.jsx";
import Button from "@/components/UI/Button";
import { useRouter } from "next/router";

const SecondsTimersPage = ({ timers }) => {
  const router = useRouter();
  const goBackHandler = () => {
    router.push("/");
  };

  return (
    <>
      <Timers timers={timers} />
      <Button onClick={goBackHandler}>Go Back</Button>
    </>
  );
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

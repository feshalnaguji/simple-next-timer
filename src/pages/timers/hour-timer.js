import { useRouter } from "next/router";
import Button from "@/components/UI/Button";
import Timers from "@/components/Timers.jsx";

const HourTimersPage = ({ timers }) => {
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

export default HourTimersPage;

export function getStaticProps() {
  return {
    props: {
      timers: 30,
    },
    revalidate: 1,
  };
}

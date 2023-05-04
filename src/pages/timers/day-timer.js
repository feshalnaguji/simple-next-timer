import { useRouter } from "next/router";
import Button from "@/components/UI/Button";
import Timers from "@/components/Timers.jsx";

const DayTimersPage = ({ timers }) => {
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

export default DayTimersPage;

export function getStaticProps() {
  return {
    props: {
      timers: 40,
    },
    revalidate: 1,
  };
}

import { useRouter } from "next/router";
import Button from "@/components/UI/Button";
import Timers from "@/components/Timers.jsx";

const MinuteTimersPage = ({ timers }) => {
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

export default MinuteTimersPage;

export function getStaticProps() {
  return {
    props: {
      timers: 20,
    },
    revalidate: 1,
  };
}

import { SportsBook, Basket } from "@components";

const Home = ({ data }) => {
  return (
    <>
      <SportsBook data={data} />
      <Basket />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://nesine-case-study.onrender.com/bets`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;

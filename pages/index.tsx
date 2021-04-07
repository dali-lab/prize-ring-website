import Layout from 'components/Layout';
import { Header } from 'components/Home';

const Home = (): JSX.Element => {
  return (
    <Layout
      title="Home"
      description="PrizeRing hosts realtime, entertaining game shows where you can compete with your friends.
      Players use their existing content to compete in live content-based game shows to win prizes."
    >
      <Header />
    </Layout>
  );
};

export default Home;

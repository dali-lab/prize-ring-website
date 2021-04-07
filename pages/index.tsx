import Layout from 'components/Layout';
import { Header, MainSplash, Section } from 'components/Home';

const Home = (): JSX.Element => {
  return (
    <Layout
      title="Home"
      description="PrizeRing hosts realtime, entertaining game shows where you can compete with your friends.
      Players use their existing content to compete in live content-based game shows to win prizes."
    >
      <Header />
      <MainSplash />
      <Section
        description="Create your own unique game shows for friends and fans from one of PrizeRing’s several show formats."
        displayImage="/display-1.png"
        outlineImage="/blob-1.png"
        orientation="left"
        offset={{ top: 100, left: -70 }}
      />
    </Layout>
  );
};

export default Home;

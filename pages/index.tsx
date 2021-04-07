import Layout from 'components/Layout';
import {
  Header, MainSplash, Section, Updates,
} from 'components/Home';

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
        offset={{ top: 150, left: -70 }}
      />
      <Section
        description="Compete in shows with image or video submissions imported from your social media or photo library."
        displayImage="/display-2.png"
        outlineImage="/blob-2.png"
        orientation="right"
        offset={{ bottom: 140, left: 100 }}
      />
      <Section
        description="Choose the best content submissions in real-time interactive voting when shows go “live” at noon and 8 PM EST every day."
        displayImage="/display-3.png"
        outlineImage="/blob-3.png"
        orientation="left"
        offset={{ top: 150, left: -70 }}
      />
      <Section
        description="Cash-in when your submission is voted the best with hundreds of dollars of prize money available daily."
        displayImage="/display-4.png"
        outlineImage="/blob-4.png"
        orientation="right"
        offset={{ bottom: 140, left: 100 }}
      />
      <Updates />
    </Layout>
  );
};

export default Home;

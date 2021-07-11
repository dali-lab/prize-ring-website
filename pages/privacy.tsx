import Layout, { Header, Footer } from 'components/Layout';
import { PrivacyPolicy } from 'components/Privacy';

const PrivacyPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Layout
        title="Privacy Policy"
        description="PrizeRing hosts realtime, entertaining game shows where you can compete with your friends.
      Players use their existing content to compete in live content-based game shows to win prizes."
      >
        <PrivacyPolicy />
      </Layout>
      <Footer />
    </>
  );
};

export default PrivacyPage;

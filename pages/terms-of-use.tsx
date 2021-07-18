import Layout, { Header, Footer } from 'components/Layout';
import { TermsOfUse } from 'components/Privacy';

const TermsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Layout
        title="Terms of Use"
        description="PrizeRing hosts realtime, entertaining game shows where you can compete with your friends.
      Players use their existing content to compete in live content-based game shows to win prizes."
      >
        <TermsOfUse />
      </Layout>
      <Footer />
    </>
  );
};

export default TermsPage;

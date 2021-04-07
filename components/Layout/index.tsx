import { NextSeo } from 'next-seo';
import { siteName } from 'lib/constants';
import Header from './Header';
import Footer from './Footer';
import styles from './styles.module.scss';

type LayoutProps = {
  children?: React.ReactNode,
  title: string,
  description: string,
  className?: string
}

const Layout = ({
  children, title, description, className = '',
}: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo title={`${title} | ${siteName}`} description={description} />
      <main className={`${styles.container} ${className}`}>
        {children}
      </main>
    </>
  );
};

export { Header, Footer };

export default Layout;

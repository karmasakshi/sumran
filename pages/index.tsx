import Image from 'next/image';
import Page from '../components/page/page';
import styles from '../styles/home-page.module.scss';

export interface HomePageProps { }

const HomePage: (props: HomePageProps) => JSX.Element = (): JSX.Element => (

  <Page title="">

    <div className={styles.heroContainer}>

      <Image src="/logo.png" alt="Logo" height={360} width={360} />

    </div>

  </Page>

);

export default HomePage;

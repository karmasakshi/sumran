import Image from 'next/image';
import Page from '../components/page/page';

export interface HomePageProps { }

const HomePage: (props: HomePageProps) => JSX.Element = (): JSX.Element => (

  <Page title="">

    <div>
      <Image src="/logo.png" alt="Logo" height={360} width={360} />
    </div>

    <div>
      <h2>Fresh veggies, harvested weekly.</h2>
    </div>

  </Page>

);

export default HomePage;

import Page from '../components/page/page';

export interface HomePageProps { }

const HomePage: (props: HomePageProps) => JSX.Element = (): JSX.Element => (

  <Page title="">
    <div>Welcome to Next.js!</div>
  </Page>

);

export default HomePage;

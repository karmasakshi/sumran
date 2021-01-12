import Image from 'next/image';
import Page from '../components/page/page';
import ProductList from '../components/product-list/product-list';

export interface HomePageProps { }

const HomePage: (props: HomePageProps) => JSX.Element = (): JSX.Element => (

  <Page title="">

    <Image alt="Logo" height={320} src="/logo.png" width={320} />

    <div className="mt-4 text-2xl">
      <span>Fresh veggies, harvested weekly.</span>
      <br />
      <a className="px-2 pb-1 text-green-700 hover:text-green-500" href="https://wa.me/+919873775667?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sumran.">Contact Us</a>
    </div>

    <div className="inline-flex my-4">
      <Image alt="Divider" height={24} src="/flower.svg" width={24} />
    </div>

    <div>
      <span className="block text-xl">Rate Card</span>
      <ProductList></ProductList>
    </div>

  </Page>

);

export default HomePage;

import Page from '@components/page/page';
import ProductList from '@components/product-list/product-list';
import Image from 'next/image';

const Home: () => JSX.Element = (): JSX.Element => (

  <Page title="">

    <Image alt="Logo" height={320} src="/logo.png" width={324} />

    <div className="mt-4 text-2xl">
      <h1>Fresh veggies, harvested weekly.</h1>
      <a className="inline-flex mt-2 px-2 text-green-700 hover:text-green-500" href="https://wa.me/+919971013347?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sumran." rel="noreferrer" target="_blank">Contact Us</a>
    </div>

    <div className="inline-flex my-4">
      <Image alt="Divider" height={24} src="/flower.svg" width={24} />
    </div>

    <p className="block text-xl">Rate Card</p>

    <ProductList></ProductList>

  </Page>

);

export default Home;

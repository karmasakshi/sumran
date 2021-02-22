import Page from '@components/page/page';
import ProductList from '@components/product-list/product-list';
import { Product } from '@interfaces/product';
import { gql, GraphQLClient } from 'graphql-request';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';

interface HomeProps {
  products: Product[];
}

const Home: FunctionComponent<HomeProps> = ({ products }: HomeProps): ReactElement => (

  <Page title="">

    <Image alt="Logo" height={320} src="/logo.png" width={324} />

    <div className="mt-4 text-2xl">
      <h1>Fresh veggies, harvested weekly.</h1>
      <a className="inline-block mt-2 px-2 text-green-700 hover:text-green-500" href="https://wa.me/+919971013347?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sumran." rel="noreferrer" target="_blank">
        <Image alt="WhatsApp logo" height={18} objectFit="contain" src="/whatsapp.svg" width={18} />
        <span>&nbsp;Contact Us</span>
      </a>
    </div>

    <div className="my-4">
      <Image alt="Divider" height={24} objectFit="contain" src="/flower.svg" width={24} />
    </div>

    <div className={products.length ? '' : 'invisible'}>

      <p className="inline-block text-xl">Rate Card</p>

      <ProductList products={products}></ProductList>

    </div>

    <div className="my-4">
      <Image alt="Divider" height={24} objectFit="contain" src="/flower.svg" width={24} />
    </div>

    <a className="inline-block mx-2" href="https://instagram.com/sumranorganicfarms" rel="noreferrer" target="_blank"><Image alt="Instagram logo" height={24} objectFit="contain" src="/instagram.svg" width={24} /></a>
    <a className="inline-block mx-2" href="https://m.facebook.com/profile.php?id=104025124696726" rel="noreferrer" target="_blank"><Image alt="Facebook logo" height={24} objectFit="contain" src="/facebook.svg" width={24} /></a>
    <a className="inline-block mx-2" href="https://instagram.com/sumranorganics" rel="noreferrer" target="_blank"><Image alt="Instagram logo" height={24} objectFit="contain" src="/instagram.svg" width={24} /></a>

  </Page>

);

export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<GetStaticPropsResult<HomeProps>> => {

  const graphcmsEndpoint: string = process.env.GRAPHCMS_ENDPOINT || '';
  const graphcmsToken: string = process.env.GRAPHCMS_TOKEN || '';
  const headers: { [header: string]: string } = { authorization: `Bearer ${graphcmsToken}` };
  const graphqlClient: GraphQLClient = new GraphQLClient(graphcmsEndpoint, { headers });

  const query: string = gql`{
    products(where: { isAvailable: true }) {
      unit
      rate
      name
      otherNames
    }
  }`;

  let products: Product[] = [];

  try {

    const response: { products: Product[] } = await graphqlClient.request<{ products: Product[] }>(query);

    products = response.products;

  } catch {

    products = [];

  }

  return {
    props: {
      products
    },
    revalidate: 1
  };

};

export default Home;

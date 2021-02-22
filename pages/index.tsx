import InformationCardCarousel from '@components/information-card-carousel/information-card-carousel';
import Page from '@components/page/page';
import ProductList from '@components/product-list/product-list';
import { InformationCard } from '@interfaces/information-card';
import { Product } from '@interfaces/product';
import { gql, GraphQLClient } from 'graphql-request';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';

interface HomeProps {
  informationCards: InformationCard[];
  products: Product[];
}

const Home: FunctionComponent<HomeProps> = ({ informationCards, products }: HomeProps): ReactElement => (

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

    <InformationCardCarousel informationCards={informationCards}></InformationCardCarousel>

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

  const getInformationCardsQuery: string = gql`{
    informationCards {
      id
      image {
        url (
          transformation: {
            image: { resize: { fit: crop, height: 800, width: 800 } }
          }
        )
      }
    }
  }`;

  const getProductsQuery: string = gql`{
    products(where: { isAvailable: true }) {
      unit
      rate
      name
      otherNames
    }
  }`;

  let informationCards: InformationCard[] = [];
  let products: Product[] = [];

  try {

    const getInformationCardsResponse: { informationCards: InformationCard[] } = await graphqlClient.request<{ informationCards: InformationCard[] }>(getInformationCardsQuery);
    informationCards = getInformationCardsResponse.informationCards;

    const getProductsResponse: { products: Product[] } = await graphqlClient.request<{ products: Product[] }>(getProductsQuery);
    products = getProductsResponse.products;

  } catch {

    informationCards = [];
    products = [];

  }

  return {
    props: {
      informationCards,
      products
    },
    revalidate: 1
  };

};

export default Home;

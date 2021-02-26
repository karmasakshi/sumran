import InformationCardCarousel from '@components/information-card-carousel/information-card-carousel';
import Page from '@components/page/page';
import ProductList from '@components/product-list/product-list';
import { InformationCard } from '@interfaces/information-card';
import { Product } from '@interfaces/product';
import { gql, GraphQLClient } from 'graphql-request';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';

interface IndexProps {
  informationCards: InformationCard[];
  products: Product[];
  updatedAt: string;
}

const Index: FunctionComponent<IndexProps> = ({ informationCards, products, updatedAt }: IndexProps): ReactElement => (

  <Page title="">

    <Image alt="Logo" height={320} src="/logo.png" width={324} />

    <div className="mt-4 text-2xl">
      <h1>Fresh veggies, harvested weekly.</h1>
      <a className="inline-block mt-2 px-2 text-green-700 hover:text-green-500" href="https://wa.me/+919971013347?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sumran." rel="noreferrer" target="_blank">
        <Image alt="WhatsApp logo" height={18} objectFit="contain" src="/whatsapp.svg" width={18} />
        <span>&nbsp;Contact Us</span>
      </a>
    </div>

    <div className={products.length ? '' : 'hidden'}>

      <div className="my-4">
        <Image alt="Divider" height={24} objectFit="contain" src="/flower.svg" width={24} />
      </div>

      <p className="inline-block text-xl">Rate Card</p>
      <p className="text-gray-500 text-xs">Last updated on: {updatedAt === '' ? '?' : (new Date(updatedAt)).toLocaleDateString()}</p>

      <ProductList products={products}></ProductList>

    </div>

    <div className={informationCards.length ? '' : 'hidden'}>

      <div className="my-4">
        <Image alt="Divider" height={24} objectFit="contain" src="/flower.svg" width={24} />
      </div>

      <InformationCardCarousel informationCards={informationCards}></InformationCardCarousel>

    </div>

    <div className="my-4">
      <Image alt="Divider" height={24} objectFit="contain" src="/flower.svg" width={24} />
    </div>

    <a className="inline-block mx-2" href="https://instagram.com/sumranorganicfarms" rel="noreferrer" target="_blank"><Image alt="Instagram logo" height={24} objectFit="contain" src="/instagram.svg" width={24} /></a>
    <a className="inline-block mx-2" href="https://m.facebook.com/profile.php?id=104025124696726" rel="noreferrer" target="_blank"><Image alt="Facebook logo" height={24} objectFit="contain" src="/facebook.svg" width={24} /></a>
    <a className="inline-block mx-2" href="https://instagram.com/sumranorganics" rel="noreferrer" target="_blank"><Image alt="Instagram logo" height={24} objectFit="contain" src="/instagram.svg" width={24} /></a>

  </Page>

);

export const getStaticProps: GetStaticProps<IndexProps> = async (): Promise<GetStaticPropsResult<IndexProps>> => {

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
      updatedAt
    }
  }`;

  let informationCards: InformationCard[] = [];
  let products: Product[] = [];
  let updatedAt: string = '';

  try {

    const getInformationCardsResponse: { informationCards: InformationCard[] } = await graphqlClient.request<{ informationCards: InformationCard[] }>(getInformationCardsQuery);
    informationCards = getInformationCardsResponse.informationCards;

    const getProductsResponse: { products: Product[] } = await graphqlClient.request<{ products: Product[] }>(getProductsQuery);
    products = getProductsResponse.products;

    const sortedUpdatedAts: number[] = products.map((product: Product): number => new Date(product.updatedAt).valueOf()).sort((a: number, b: number): number => b - a);
    updatedAt = sortedUpdatedAts.length ? (new Date(String(sortedUpdatedAts[0]))).toISOString() : '';

  } catch {

    informationCards = [];
    products = [];
    updatedAt = '';

  }

  return {
    props: {
      informationCards,
      products,
      updatedAt
    },
    revalidate: 1
  };

};

export default Index;

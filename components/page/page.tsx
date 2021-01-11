import Head from 'next/head';
import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  title: string;
};

const Page: (props: PageProps) => JSX.Element = ({ children, title }: PageProps): JSX.Element => (

  <>

    <Head><title>{'Sumran Organic Farms' + (title.length ? ' - ' + title : '')}</title></Head>

    <section className="pb-32 pt-16 px-4 text-center">{children}</section>

  </>

);

export default Page;

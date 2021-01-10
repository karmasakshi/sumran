import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './page.module.scss';

interface PageProps {
  children: ReactNode;
  title: string;
};

const Page: (props: PageProps) => JSX.Element = ({ children, title }: PageProps): JSX.Element => (

  <div className={styles.page}>

    <Head><title>{'Sumran Organic Farms' + (title.length ? ' - ' + title : '')}</title></Head>

    <section>{children}</section>

  </div>

);

export default Page;

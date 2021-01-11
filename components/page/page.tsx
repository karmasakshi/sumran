import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './page.module.scss';

interface PageProps {
  children: ReactNode;
  title: string;
};

const Page: (props: PageProps) => JSX.Element = ({ children, title }: PageProps): JSX.Element => (

  <div className={styles.page}>

    <Head><title>{'Sumran' + (title.length ? ' - ' + title : '')}</title></Head>

    <section className="pb-32 pt-16 px-4 text-center">{children}</section>

  </div>

);

export default Page;

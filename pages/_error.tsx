import Page from '@components/page/page';
import Image from 'next/image';

interface ErrorProps {
  statusCode: number;
}

const Error: (props: ErrorProps) => JSX.Element = ({ statusCode }: ErrorProps): JSX.Element => (

  <Page title="Error">

    <Image alt="Logo" height={80} src="/logo.png" width={81} />

    <h1>Error {statusCode}.</h1>

  </Page>

);

export default Error;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: (props: any) => Promise<{ props: ErrorProps }> = async ({ res, err }: any): Promise<{ props: ErrorProps }> => {

  const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404;

  return { props: { statusCode } };

};

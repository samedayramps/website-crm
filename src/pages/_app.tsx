import type { AppProps } from 'next/app';
import '../styles/globals.css'; // This import ensures global styles are applied
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config'; // Adjust the path if necessary

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

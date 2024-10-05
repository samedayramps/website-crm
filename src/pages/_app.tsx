import type { AppProps } from 'next/app';
import '../styles/globals.css'; // This import ensures global styles are applied

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

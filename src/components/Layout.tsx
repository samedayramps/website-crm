import React, { useState, lazy, Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from './ui/Modal';
import Head from 'next/head';
import CookieConsent from './CookieConsent';

const LazyRampRequestForm = lazy(() => import('./ramprequestform/RampRequestForm'));

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRampRequest = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fullTitle = title ? `${title} | Same Day Ramps` : 'Same Day Ramps';

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.samedayramps.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content="https://www.samedayramps.com/images/twitter-image.jpg" />
        <link rel="canonical" href={`https://www.samedayramps.com${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
      </Head>
      <Header onOpenRampRequest={handleOpenRampRequest} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyRampRequestForm />
        </Suspense>
      </Modal>
      <CookieConsent />
    </div>
  );
}
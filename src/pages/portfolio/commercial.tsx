import React from 'react';
import Layout from '../../components/Layout';

export default function CommercialPortfolio() {
  return (
    <Layout title="Commercial Ramp Portfolio" description="Our commercial ramp installations">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Commercial Ramp Portfolio</h1>
        {/* Add portfolio content here */}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Commercial Ramp Portfolio",
            "description": "Our commercial ramp installations",
            "url": "https://www.samedayramps.com/portfolio/commercial"
          })
        }}
      />
    </Layout>
  );
}

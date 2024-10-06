import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Learn about Same Day Ramps' privacy policy, including how we collect, use, and protect your personal information."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="text-lg space-y-6">
          <p>
            At Same Day Ramps, we are committed to protecting your privacy. This policy outlines our practices regarding the collection, use, and disclosure of your information.
          </p>
          {/* Add more detailed content here */}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Learn about Same Day Ramps' privacy policy, including how we collect, use, and protect your personal information.",
            "url": "https://www.samedayramps.com/privacy-policy"
          })
        }}
      />
    </Layout>
  );
}

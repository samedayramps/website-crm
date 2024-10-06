import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const HelpfulInformation: React.FC = () => {
  const topics = [
    { title: 'ADA Guidelines', path: '/helpful-information/ada-guidelines' },
    { title: 'FAQs', path: '/helpful-information/faqs' },
    { title: 'Funding Assistance', path: '/helpful-information/funding-assistance' },
    // Removed How to Get a Wheelchair Ramp
    { title: 'Wheelchair Ramp Types', path: '/helpful-information/wheelchair-ramp-types' },
  ];

  return (
    <Layout
      title="Helpful Information"
      description="Explore helpful information about wheelchair ramps, including types, maintenance, and funding assistance."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Helpful Information</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <Link key={topic.title} href={topic.path} className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-100">
              <h2 className="text-2xl font-semibold">{topic.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HelpfulInformation;

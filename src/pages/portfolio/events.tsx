import React from 'react';
import Layout from '../../components/Layout';

export default function EventsPortfolio() {
  return (
    <Layout title="Event Portfolio" description="Our event accessibility solutions">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Event Portfolio</h1>
        <p>We provide temporary accessibility solutions for various events. While we no longer offer dedicated event ramp rentals, we can work with you to find suitable temporary solutions for your event needs.</p>
        {/* Add any other relevant content about event accessibility */}
      </div>
    </Layout>
  );
}

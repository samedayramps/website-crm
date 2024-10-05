import React from 'react';
import Layout from '../../components/Layout';

export default function FundingAssistance() {
  return (
    <Layout
      title="Funding Assistance for Wheelchair Ramps"
      description="Explore funding options available for wheelchair ramp rentals and installations."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Funding Assistance for Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            There are various funding options available to help cover the cost of wheelchair ramp rentals and installations. These may include government programs, non-profit organizations, and insurance coverage.
          </p>
          {/* Add more detailed content here */}
        </div>
      </div>
    </Layout>
  );
}

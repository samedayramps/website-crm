import React from 'react';
import Layout from '../../components/Layout';

export default function ADAGuidelines() {
  return (
    <Layout
      title="ADA Guidelines for Wheelchair Ramps"
      description="Learn about the ADA guidelines for wheelchair ramps to ensure accessibility and compliance for residential, commercial, and event rentals."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">ADA Guidelines for Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            The Americans with Disabilities Act (ADA) provides guidelines to ensure that wheelchair ramps are accessible and safe for all users. These guidelines are crucial for residential, commercial, and event settings to ensure compliance and accessibility.
          </p>

          <h2 className="text-3xl font-semibold mt-6">Residential Rentals</h2>
          <p>
            For residential settings, ADA guidelines help ensure that ramps provide safe and easy access to homes. Key considerations include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Slope:</strong> The recommended slope for residential ramps is 1:12, meaning for every inch of height, there should be at least 12 inches of ramp run.</li>
            <li><strong>Width:</strong> Ramps should be at least 36 inches wide to accommodate most wheelchairs.</li>
            <li><strong>Handrails:</strong> Handrails are recommended for ramps with a rise greater than 6 inches.</li>
            <li><strong>Surface:</strong> Non-slip surfaces are essential for safety in all weather conditions.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Commercial Rentals</h2>
          <p>
            In commercial settings, ADA compliance is not only about accessibility but also about meeting legal requirements. Considerations include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Slope:</strong> The maximum slope for commercial ramps is 1:12, but a gentler slope is preferred for ease of use.</li>
            <li><strong>Landing:</strong> Ramps must have a level landing at the top and bottom, and at any change of direction.</li>
            <li><strong>Width:</strong> A minimum width of 36 inches is required, but wider ramps are recommended for high-traffic areas.</li>
            <li><strong>Signage:</strong> Proper signage should be used to direct users to accessible entrances.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Event Rentals</h2>
          <p>
            For events, temporary ramps must be both functional and compliant. Key points include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Portability:</strong> Ramps should be easy to set up and remove, with a design that accommodates temporary use.</li>
            <li><strong>Stability:</strong> Ensure ramps are securely anchored to prevent movement during use.</li>
            <li><strong>Accessibility:</strong> Ramps should be placed to provide the most direct access to event areas.</li>
            <li><strong>Safety:</strong> Non-slip surfaces and handrails are crucial for guest safety.</li>
          </ul>

          <p>
            Ensuring compliance with ADA guidelines not only meets legal requirements but also enhances accessibility for all users. For more information or assistance with your specific needs, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
}

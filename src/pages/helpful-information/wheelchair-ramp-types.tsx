import React from 'react';
import Layout from '../../components/Layout';

export default function WheelchairRampTypes() {
  return (
    <Layout
      title="Types of Wheelchair Ramps"
      description="Explore the different types of wheelchair ramps available to suit various needs and environments."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Types of Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            Wheelchair ramps come in various types, each designed to meet specific needs and environments. Understanding the differences can help you choose the right ramp for your situation.
          </p>

          <h2 className="text-3xl font-semibold mt-6">Portable Ramps</h2>
          <p>
            Portable ramps are lightweight and easy to transport, making them ideal for temporary use or travel. They can be used to overcome small obstacles like steps or curbs.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Easy to carry and set up, suitable for temporary needs.</li>
            <li><strong>Ideal For:</strong> Travel, temporary access needs, and small height differences.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Threshold Ramps</h2>
          <p>
            Threshold ramps are designed to bridge small height differences at doorways or other thresholds. They provide a smooth transition for wheelchairs and scooters.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Simple installation, enhances accessibility at doorways.</li>
            <li><strong>Ideal For:</strong> Homes, offices, and any place with small steps or raised thresholds.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Modular Ramps</h2>
          <p>
            Modular ramps are customizable and can be configured to fit various spaces. They are suitable for both residential and commercial use and can be adjusted as needed.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Flexible design, can be reconfigured or expanded.</li>
            <li><strong>Ideal For:</strong> Long-term use, complex access needs, and larger height differences.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Permanent Ramps</h2>
          <p>
            Permanent ramps are built to last and are typically constructed from durable materials like concrete or metal. They are a long-term solution for accessibility.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Durable and reliable, requires professional installation.</li>
            <li><strong>Ideal For:</strong> Homes and businesses with ongoing accessibility needs.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Folding Ramps</h2>
          <p>
            Folding ramps are similar to portable ramps but can be folded for easier storage and transport. They are convenient for users who need a ramp on the go.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Compact storage, easy to transport.</li>
            <li><strong>Ideal For:</strong> Travel, temporary access, and users with limited storage space.</li>
          </ul>

          <p>
            Choosing the right type of wheelchair ramp depends on your specific needs, the environment, and the level of accessibility required. For more information or assistance in selecting the right ramp, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
}

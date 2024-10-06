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

          <h2 className="text-3xl font-semibold mt-6">Wood Ramps</h2>
          <p>
            Wood ramps are a popular choice for residential settings due to their natural appearance and customizability. They can be built to fit specific dimensions and are often more affordable than other materials.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Customizable, aesthetically pleasing, cost-effective.</li>
            <li><strong>Ideal For:</strong> Homes and areas where aesthetics are important.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Aluminum Ramps</h2>
          <p>
            Aluminum ramps are lightweight, durable, and resistant to rust, making them ideal for both temporary and permanent installations. They are easy to install and maintain.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Lightweight, rust-resistant, easy to install.</li>
            <li><strong>Ideal For:</strong> Both residential and commercial use.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Portable Ramps</h2>
          <p>
            Portable ramps are designed for temporary use and are easy to transport. They are perfect for travel or short-term needs and can be used to overcome small obstacles like steps or curbs.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Easy to carry and set up, suitable for temporary needs.</li>
            <li><strong>Ideal For:</strong> Travel, temporary access needs, and small height differences.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Steel Ramps</h2>
          <p>
            Steel ramps are known for their strength and durability. They are often used in commercial settings where heavy-duty use is expected. Steel ramps require maintenance to prevent rust.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Strong and durable, suitable for heavy use.</li>
            <li><strong>Ideal For:</strong> Commercial and industrial settings.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Threshold Ramps</h2>
          <p>
            Threshold ramps are designed to bridge small height differences at doorways or other thresholds. They provide a smooth transition for wheelchairs and scooters.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benefits:</strong> Simple installation, enhances accessibility at doorways.</li>
            <li><strong>Ideal For:</strong> Homes, offices, and any place with small steps or raised thresholds.</li>
          </ul>

          <p>
            Choosing the right type of wheelchair ramp depends on your specific needs, the environment, and the level of accessibility required. For more information or assistance in selecting the right ramp, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
}

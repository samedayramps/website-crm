import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const ServiceAreas: React.FC = () => {
  const cities = [
    'Dallas', 'Fort Worth', 'Arlington', 'Irving', 'Plano', 'Garland',
    'Frisco', 'McKinney', 'Denton', 'Lewisville', 'Grand Prairie',
    'Decatur', 'Weatherford', 'Rockwall'
  ];

  return (
    <Layout
      title="Service Areas"
      description="Explore our wheelchair ramp rental services across various cities in the Dallas-Fort Worth area."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Service Areas</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link key={city} href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`} className="block bg-white p-6 rounded-lg shadow-md hover:bg-gray-100">
              <h2 className="text-2xl font-semibold">{city}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServiceAreas;

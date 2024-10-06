import React from 'react';
import Layout from './Layout';
import Head from 'next/head';
import Link from 'next/link'; // Import the Link component

interface CityServiceAreaProps {
  cityName: string;
  description: string;
}

const CityServiceArea: React.FC<CityServiceAreaProps> = ({ cityName, description }) => {
  const title = `Wheelchair Ramp Rentals in ${cityName} | Same Day Ramps`;
  const canonicalUrl = `https://www.samedayramps.com/service-areas/${cityName.toLowerCase().replace(' ', '-')}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Wheelchair Ramp Rentals in {cityName}
        </h1>
        
        <section className="bg-[#3099e5] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">Reliable Ramp Rentals in {cityName}</h2>
            <p className="text-lg mb-8">
              We provide top-quality, ADA-compliant wheelchair ramps for rent in {cityName}. Our team ensures fast installation and flexible rental terms to meet your needs.
            </p>
            <p className="text-lg mb-8">
              Whether you need a ramp for residential, commercial, or event purposes, we have the right solution for you. Contact us today for a free quote and same-day installation in many cases.
            </p>
            <Link href="/helpful-information/ada-guidelines" className="text-blue-600 hover:underline">
              Learn more about ADA guidelines for ramps.
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Quick and professional installation</li>
              <li>Flexible rental periods tailored to your needs</li>
              <li>High-quality, ADA-compliant ramps</li>
              <li>Experienced and professional installation team</li>
            </ul>
            <p className="mt-4 text-center">
              <Link href="/helpful-information/funding-assistance" className="text-blue-600 hover:underline">
                Explore funding assistance options.
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Customer Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg italic">"The service was excellent and the ramp was installed quickly. Highly recommend!"</p>
                <p className="mt-4 text-right">- Satisfied Customer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg italic">"Great quality ramps and very professional team. Will use again!"</p>
                <p className="mt-4 text-right">- Happy Client</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-4">For more information or to request a quote, please contact us:</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: info@samedayramps.com</p>
          </div>
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Same Day Ramps",
          "description": `Wheelchair Ramp Rentals in ${cityName}`,
          "url": canonicalUrl,
          "telephone": "(123) 456-7890",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.7767",
            "longitude": "-96.7970"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })
      }} />
    </Layout>
  );
};

export default CityServiceArea;
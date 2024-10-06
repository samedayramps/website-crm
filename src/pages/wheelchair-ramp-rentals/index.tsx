import React, { useState } from 'react'
import Layout from '../../components/Layout'
import ServiceCard from '../../components/ServiceCard'
import Button from '../../components/ui/button'
import Link from 'next/link'
import Head from 'next/head'
import { ChevronRight } from 'lucide-react' // Import the ChevronRight icon
import Modal from '../../components/ui/Modal' // Import the Modal component
import RampRequestForm from '../../components/ramprequestform/RampRequestForm' // Import the RampRequestForm component

const services = [
  {
    title: 'Residential Ramps',
    description: 'Temporary wheelchair ramp solutions for your home. Ideal for short-term recovery or long-term accessibility needs.',
    image: 'https://i.imgur.com/auRW5x1.webp', // Updated to use the WebP image
    link: '/wheelchair-ramp-rentals/residential',
  },
  {
    title: 'Commercial Ramps',
    description: 'ADA-compliant wheelchair ramps for businesses. Ensure your establishment is accessible to all customers and employees.',
    image: 'https://i.imgur.com/qscqTrp.webp', // Updated to use the WebP image
    link: '/wheelchair-ramp-rentals/commercial',
  },
]

export default function WheelchairRampRentals() {
  const [isModalOpen, setIsModalOpen] = useState(false) // State to control modal visibility

  return (
    <>
      <Head>
        <title>Wheelchair Ramp Rental Services | Same Day Ramps</title>
        <meta name="description" content="Explore our range of wheelchair ramp rental services including residential, commercial, and event solutions. Fast installation and flexible rental periods available." />
        <meta property="og:title" content="Wheelchair Ramp Rental Services | Same Day Ramps" />
        <meta property="og:description" content="Explore our range of wheelchair ramp rental services including residential, commercial, and event solutions. Fast installation and flexible rental periods available." />
        <meta property="og:image" content="https://www.samedayramps.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.samedayramps.com/wheelchair-ramp-rentals" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.samedayramps.com/wheelchair-ramp-rentals" />
      </Head>
      <Layout 
        title="Wheelchair Ramp Rental Services" 
        description="Explore our range of wheelchair ramp rental services including residential, commercial, and event solutions. Fast installation and flexible rental periods available."
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Wheelchair Ramp Rental Services</h1>
          
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            At Same Day Ramps, we offer a variety of wheelchair ramp rental solutions to meet your specific needs. 
            Whether you're looking for a temporary home solution, need to make your business accessible, or planning an inclusive event, we've got you covered.
            <Link href="/helpful-information/wheelchair-ramp-types" className="text-blue-600 hover:underline">Learn more about the types of ramps we offer.</Link>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href={service.link} className="text-blue-600 hover:underline flex items-center">
                  Learn More <ChevronRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Rent a Wheelchair Ramp?</h2>
            <p className="text-xl mb-6">Get in touch with us for a free quote and same-day installation in many cases.</p>
            <Button size="lg" className="btn-primary" onClick={() => setIsModalOpen(true)}>
              Request a Quote
            </Button>
            <p className="mt-4">
              <Link href="/helpful-information/funding-assistance" className="text-blue-600 hover:underline">Explore funding assistance options.</Link>
            </p>
          </div>
        </div>
      </Layout>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RampRequestForm />
      </Modal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wheelchair Ramp Rental Services",
            "description": "Temporary and permanent wheelchair ramp solutions for residential, commercial, and event needs.",
            "url": "https://www.samedayramps.com/wheelchair-ramp-rentals",
            "serviceType": "Wheelchair Ramp Rental",
            "provider": {
              "@type": "Organization",
              "name": "Same Day Ramps",
              "url": "https://www.samedayramps.com",
              "logo": "https://www.samedayramps.com/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "Customer Service"
              }
            }
          }),
        }}
      />
    </>
  )
}
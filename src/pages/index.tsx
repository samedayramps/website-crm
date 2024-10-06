import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Button from '../components/ui/button'
import { ChevronRight, ChevronDown } from 'lucide-react'
import RampRequestForm from '../components/ramprequestform/RampRequestForm'
import Modal from '../components/ui/Modal'; // Import the Modal component
import Image from 'next/image' // Import the Image component

interface ReasonProps {
  title: string
  details: string
}

const Reason: React.FC<ReasonProps> = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary flex items-center justify-between w-full text-left"
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <ChevronDown className="flex-shrink-0" /> : <ChevronRight className="flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {details}
        </div>
      )}
    </div>
  )
}

const heroImages = [
  'https://i.imgur.com/qscqTrp.jpg', // Direct link to the first image
  'https://i.imgur.com/R4qdE5t.jpg', // Direct link to the second image
  'https://i.imgur.com/auRW5x1.jpg', // Direct link to the third image
  // Add more image URLs as needed
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageFading, setIsImageFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImageFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsImageFading(false);
      }, 500); // Half of the transition time
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const reasons = [
    {
      title: 'Quick installation',
      details: 'Our team of experts can typically install your ramp within hours of your request, ensuring you have the accessibility you need as soon as possible.'
    },
    {
      title: 'Flexible rental periods',
      details: 'Whether you need a ramp for a few days or several months, we offer rental terms that can be tailored to your specific situation.'
    },
    {
      title: 'High-quality, ADA-compliant ramps',
      details: 'All our ramps meet or exceed ADA standards, ensuring safety and ease of use for all users.'
    },
    {
      title: 'Experienced, professional installation team',
      details: 'Our installers are trained professionals who ensure your ramp is set up correctly and safely.'
    },
    {
      title: 'Serving the entire Dallas-Fort Worth metroplex',
      details: 'We provide our services throughout the DFW area, including all major cities and suburbs.'
    },
  ];

  const helpfulTopics = [
    { title: 'Residential Ramps', path: '/wheelchair-ramp-rentals/residential' },
    { title: 'Commercial Ramps', path: '/wheelchair-ramp-rentals/commercial' },
    { title: 'ADA Guidelines', path: '/helpful-information/ada-guidelines' },
    { title: 'Funding Assistance', path: '/helpful-information/funding-assistance' },
  ];

  const handleOpenRampRequest = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout
      title="Wheelchair Ramp Rentals in DFW"
      description="Fast installation and affordable rates for wheelchair ramp rentals in the Dallas-Fort Worth area."
    >
      <section className="relative h-[600px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? (isImageFading ? 'opacity-0' : 'opacity-100') : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Hero Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={75}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Wheelchair Ramp Rentals in DFW</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Fast installation. Affordable rates. Rent as long as you need.
            </p>
            <Button size="lg" className="btn-primary" onClick={handleOpenRampRequest}>
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Residential', 'Commercial', 'Event'].map((type) => (
              <div key={type} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{type} Ramps</h3>
                <p className="mb-4">
                  {type === 'Residential'
                    ? 'Temporary ramp solutions for your home.'
                    : type === 'Commercial'
                    ? 'ADA-compliant ramps for businesses.'
                    : 'Short-term rentals for special occasions.'}
                </p>
                <Link href={`/wheelchair-ramp-rentals/${type.toLowerCase()}`} className="text-blue-600 hover:underline flex items-center">
                  Learn More <ChevronRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Same Day Ramps?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <Reason key={index} {...reason} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Helpful Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {helpfulTopics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{topic.title}</h3>
                <Link href={topic.path} className="text-blue-600 hover:underline flex items-center">
                  Learn More <ChevronRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RampRequestForm />
      </Modal>

      <section className="bg-[#3099e5] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Serving the DFW Area</h2>
          <div className="grid md:grid-cols-3 gap-4 text-lg">
            {['Dallas', 'Fort Worth', 'Arlington', 'Irving', 'Plano', 'Garland', 'Frisco', 'McKinney', 'Denton', 'Lewisville', 'Grand Prairie', 'Decatur', 'Weatherford', 'Rockwall'].map((city) => (
              <Link 
                key={city} 
                href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`} 
                className="btn-secondary"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-24"> {/* Increased padding */}
        <h2 className="text-3xl font-bold mb-4">Ready to Rent a Wheelchair Ramp?</h2>
        <p className="text-xl mb-6">Get in touch with us for a free quote and same-day installation in many cases.</p>
        <Button size="lg" className="btn-primary" onClick={handleOpenRampRequest}>
          Get a Free Quote
        </Button>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Same Day Ramps",
            "description": "Wheelchair Ramp Rentals in DFW",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Accessibility Lane",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75201",
              "addressCountry": "US"
            },
            "telephone": "1-800-RAMP-NOW",
            "url": "https://www.samedayramps.com"
          })
        }}
      />
    </Layout>
  )
}
import React from 'react'
import Layout from '../../components/Layout'
import ServiceCard from '../../components/ServiceCard'
import Button from '../../components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: 'Residential Ramps',
    description: 'Temporary wheelchair ramp solutions for your home. Ideal for short-term recovery or long-term accessibility needs.',
    image: '/images/residential-ramp.jpg',
    link: '/wheelchair-ramp-rentals/residential',
  },
  {
    title: 'Commercial Ramps',
    description: 'ADA-compliant wheelchair ramps for businesses. Ensure your establishment is accessible to all customers and employees.',
    image: '/images/commercial-ramp.jpg',
    link: '/wheelchair-ramp-rentals/commercial',
  },
  {
    title: 'Event Ramps',
    description: 'Short-term wheelchair ramp rentals for special occasions. Make your event accessible and inclusive for all attendees.',
    image: '/images/event-ramp.jpg',
    link: '/wheelchair-ramp-rentals/events',
  },
]

export default function WheelchairRampRentals() {
  return (
    <Layout 
      title="Wheelchair Ramp Rental Services" 
      description="Explore our range of wheelchair ramp rental services including residential, commercial, and event solutions. Fast installation and flexible rental periods available."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Wheelchair Ramp Rental Services</h1>
        
        <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
          At Same Day Ramps, we offer a variety of wheelchair ramp rental solutions to meet your specific needs. 
          Whether you're looking for a temporary home solution, need to make your business accessible, or planning an inclusive event, we've got you covered.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Rent a Wheelchair Ramp?</h2>
          <p className="text-xl mb-6">Get in touch with us for a free quote and same-day installation in many cases.</p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
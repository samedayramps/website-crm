import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Button from '../../components/ui/button'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'

export default function CommercialRamps() {
  return (
    <Layout
      title="Commercial Wheelchair Ramp Rentals"
      description="ADA-compliant wheelchair ramps for businesses. Ensure your establishment is accessible to all customers and employees with our flexible rental solutions."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Commercial Wheelchair Ramp Rentals</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/images/commercial-ramp-large.jpg"
              alt="Commercial Wheelchair Ramp"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Business Accessibility Solutions</h2>
            <p className="text-lg mb-4">
              Our commercial wheelchair ramp rentals provide ADA-compliant accessibility solutions for businesses of all sizes. Ensure your establishment is welcoming and accessible to all customers and employees.
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>ADA compliant designs</li>
              <li>Suitable for various business types</li>
              <li>Durable construction for high-traffic areas</li>
              <li>Professional installation and removal</li>
              <li>Flexible rental terms to suit your needs</li>
            </ul>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/rental-request">Request a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Our Commercial Ramps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'ADA Compliance', description: 'Meet legal requirements for accessibility.' },
              { title: 'Increased Customer Base', description: 'Welcome customers with mobility challenges.' },
              { title: 'Employee Accommodation', description: 'Provide equal access for all employees.' },
              { title: 'Flexible Solutions', description: 'Temporary or long-term rentals available.' },
              { title: 'Cost-Effective', description: 'More affordable than permanent construction.' },
              { title: 'Quick Installation', description: 'Minimize disruption to your business operations.' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Business Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Same Day Ramps helped us quickly comply with ADA requirements. Their service was prompt and professional."
              author="John D., Store Owner in Plano"
            />
            <TestimonialCard
              quote="The flexibility of renting a ramp was perfect for our seasonal business needs. Great quality and service!"
              author="Lisa M., Event Coordinator in Arlington"
            />
          </div>
        </div>

        <div className="bg-[#3099e5] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Make Your Business Accessible Today</h2>
          <p className="text-lg mb-6">
            Contact us for a free consultation and quote. Let us help you make your business welcoming to all customers and compliant with accessibility regulations.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
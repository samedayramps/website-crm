import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Button from '../../components/ui/button'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'

export default function ResidentialRamps() {
  return (
    <Layout
      title="Residential Wheelchair Ramp Rentals"
      description="Temporary wheelchair ramp solutions for your home. Fast installation and flexible rental periods for short-term recovery or long-term accessibility needs."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Residential Wheelchair Ramp Rentals</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/images/residential-ramp-large.jpg"
              alt="Residential Wheelchair Ramp"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Home Accessibility Solutions</h2>
            <p className="text-lg mb-4">
              Our residential wheelchair ramp rentals provide a safe and convenient solution for temporary or long-term accessibility needs at home. Whether you're recovering from surgery, dealing with a temporary injury, or need a long-term solution, we've got you covered.
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>Quick and professional installation</li>
              <li>Customizable lengths to fit your home</li>
              <li>Non-slip surfaces for safety in all weather conditions</li>
              <li>ADA compliant designs</li>
              <li>Flexible rental periods</li>
            </ul>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/rental-request">Request a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Residential Ramps?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fast Installation', description: 'Same-day or next-day installation in most cases.' },
              { title: 'Affordable', description: 'Cost-effective solution compared to permanent modifications.' },
              { title: 'Flexible', description: 'Rent for as long as you need, with easy extension options.' },
              { title: 'Safe', description: 'Built to the highest safety standards with handrails and non-slip surfaces.' },
              { title: 'Customizable', description: 'Tailored to your specific home layout and needs.' },
              { title: 'Removable', description: 'No permanent changes to your property required.' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Same Day Ramps made it so easy for my mother to come home from the hospital. They installed the ramp the same day I called!"
              author="Sarah J., Dallas"
            />
            <TestimonialCard
              quote="The flexibility of renting a ramp was perfect for my recovery. Great service and high-quality ramps."
              author="Michael T., Fort Worth"
            />
          </div>
        </div>

        <div className="bg-[#3099e5] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Improve Your Home's Accessibility?</h2>
          <p className="text-lg mb-6">
            Contact us today for a free quote and learn how we can help make your home more accessible with our residential wheelchair ramp rentals.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
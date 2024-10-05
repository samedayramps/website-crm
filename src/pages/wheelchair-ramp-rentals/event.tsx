import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Button from '../../components/ui/button'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'

export default function EventRamps() {
  return (
    <Layout
      title="Event Wheelchair Ramp Rentals"
      description="Short-term wheelchair ramp rentals for special occasions. Make your event accessible and inclusive for all attendees with our quick and easy solutions."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Event Wheelchair Ramp Rentals</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/images/event-ramp-large.jpg"
              alt="Event Wheelchair Ramp"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Inclusive Event Solutions</h2>
            <p className="text-lg mb-4">
              Our event wheelchair ramp rentals ensure that your special occasion is accessible to all attendees. Whether you're planning a wedding, conference, or outdoor festival, we provide quick and easy accessibility solutions.
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>Suitable for indoor and outdoor events</li>
              <li>Quick setup and removal</li>
              <li>Various sizes to accommodate different venues</li>
              <li>ADA compliant designs</li>
              <li>Short-term rental options available</li>
            </ul>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/rental-request">Request a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Event Ramps?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Inclusivity', description: 'Ensure all guests can participate in your event.' },
              { title: 'Versatility', description: 'Suitable for various event types and venues.' },
              { title: 'Easy Setup', description: 'Quick installation and removal to fit your event schedule.' },
              { title: 'Safety First', description: 'Non-slip surfaces and optional handrails for guest safety.' },
              { title: 'Customizable', description: 'Different sizes and configurations available.' },
              { title: 'Professional Service', description: 'Expert advice and installation from our team.' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Event Planners Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Same Day Ramps made our outdoor wedding accessible for all our guests. Their service was fantastic!"
              author="Emily R., Wedding Planner in Dallas"
            />
            <TestimonialCard
              quote="We use Same Day Ramps for all our corporate events. They're reliable, professional, and always deliver on time."
              author="Mark S., Event Coordinator in Irving"
            />
          </div>
        </div>

        <div className="bg-[#3099e5] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Make Your Event Accessible to Everyone</h2>
          <p className="text-lg mb-6">
            Contact us today to learn how we can help make your event inclusive and accessible with our wheelchair ramp rental solutions.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
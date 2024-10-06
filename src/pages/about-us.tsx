import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/ui/button'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <Layout
      title="About Same Day Ramps"
      description="Learn about Same Day Ramps, your trusted provider of wheelchair ramp rentals in the Dallas-Fort Worth area. Our mission, values, and commitment to accessibility."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Same Day Ramps</h1>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Same Day Ramps, our mission is to enhance accessibility and improve the quality of life for individuals with mobility challenges. We strive to provide quick, reliable, and affordable wheelchair ramp solutions to homes, businesses, and events throughout the Dallas-Fort Worth area.
          </p>
          <p className="text-lg mb-4">
            We believe that everyone deserves the freedom to access their surroundings with ease and dignity. Our team is dedicated to making this belief a reality through our top-quality ramp rentals and exceptional customer service.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Accessibility', description: 'We are committed to making spaces accessible for everyone.' },
              { title: 'Reliability', description: 'We deliver on our promises with same-day service whenever possible.' },
              { title: 'Quality', description: 'We provide only the highest quality, ADA-compliant ramps.' },
              { title: 'Customer-First', description: "We prioritize our customers' needs and satisfaction above all else." },
              { title: 'Innovation', description: 'We continuously seek new ways to improve our services and products.' },
              { title: 'Community', description: 'We are dedicated to making a positive impact in the DFW community.' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Our experienced team of professionals is passionate about accessibility and dedicated to providing the best possible service. From our knowledgeable customer service representatives to our skilled installation technicians, every member of the Same Day Ramps family is committed to excellence.
          </p>
        </div>

        <div className="bg-[#3099e5] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Same Day Ramps Difference?</h2>
          <p className="text-lg mb-6">
            Whether you need a temporary ramp for your home, a long-term solution for your business, or accessibility for your special event, we're here to help.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/rental-request">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
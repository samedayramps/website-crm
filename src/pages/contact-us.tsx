import React from 'react'
import Layout from '../components/Layout'
import { Phone, Mail } from 'lucide-react'

export default function ContactUs() {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Same Day Ramps for all your wheelchair ramp rental needs in the Dallas-Fort Worth area. We're here to help you with accessibility solutions."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We're here to answer any questions you may have about our wheelchair ramp rental services. 
            Feel free to reach out to us using the contact information below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="mr-2 text-blue-600" />
              <span>(940) 373-5713</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-blue-600" />
              <span>info@samedayramps.com</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
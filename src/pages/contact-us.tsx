import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/ui/button';
import Input from '../components/ui/input';
import Textarea from '../components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted')
  }

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Same Day Ramps for all your wheelchair ramp rental needs in the Dallas-Fort Worth area. We're here to help you with accessibility solutions."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We're here to answer any questions you may have about our wheelchair ramp rental services. 
              Feel free to reach out to us using the contact information below or by filling out the form.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-2 text-blue-600" />
                <span>1-800-RAMP-NOW</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-blue-600" />
                <span>info@samedayramps.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-blue-600" />
                <span>123 Accessibility Lane, Dallas, TX 75201</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 3:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="tel" placeholder="Your Phone Number" required />
              <Textarea placeholder="Your Message" rows={4} required />
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link'; // Import the Link component

export default function FAQs() {
  return (
    <Layout
      title="Frequently Asked Questions"
      description="Find answers to common questions about our wheelchair ramp rental services."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="text-lg space-y-6">
          <h2 className="text-2xl font-semibold mt-6">1. How do I rent a wheelchair ramp?</h2>
          <p>
            Renting a wheelchair ramp is easy. Simply contact us to discuss your needs, and we'll guide you through the process. We offer flexible rental terms to suit your specific situation.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. What types of ramps do you offer?</h2>
          <p>
            We offer a variety of ramps including portable, threshold, modular, and permanent ramps. Each type is designed to meet different needs and environments. Visit our <Link href="/helpful-information/wheelchair-ramp-types" className="text-blue-600 hover:underline">Wheelchair Ramp Types</Link> page for more details.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Are your ramps ADA compliant?</h2>
          <p>
            Yes, all our ramps meet or exceed ADA standards, ensuring safety and accessibility for all users. We adhere to the guidelines to provide the best solutions for residential, commercial, and event settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. How quickly can a ramp be installed?</h2>
          <p>
            Our team of experts can typically install your ramp within hours of your request, ensuring you have the accessibility you need as soon as possible. Same-day installation is available in many cases.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Do you offer long-term rentals?</h2>
          <p>
            Yes, we offer both short-term and long-term rental options. Whether you need a ramp for a few days or several months, we can tailor our rental terms to meet your needs.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. How do I maintain the ramp?</h2>
          <p>
            Regular maintenance is important to ensure the safety and functionality of your ramp. Check out our <Link href="/helpful-information/maintenance-safety-tips" className="text-blue-600 hover:underline">Maintenance and Safety Tips</Link> page for guidance.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. What if I need financial assistance?</h2>
          <p>
            There are various funding options available to help cover the cost of wheelchair ramp rentals and installations. Visit our <Link href="/helpful-information/funding-assistance" className="text-blue-600 hover:underline">Funding Assistance</Link> page for more information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. How can I contact you for more information?</h2>
          <p>
            You can reach us via email at <a href="mailto:info@samedayramps.com" className="text-blue-600 hover:underline">info@samedayramps.com</a> or call us at (123) 456-7890. Our team is ready to assist you with any questions or concerns.
          </p>
        </div>
      </div>
    </Layout>
  );
}

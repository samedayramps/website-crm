import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Learn about Same Day Ramps' privacy policy, including how we collect, use, and protect your personal information."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="text-lg space-y-6">
          <p>
            At Same Day Ramps, we are committed to protecting your privacy. This policy outlines our practices regarding the collection, use, and disclosure of your information.
          </p>
          <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
          <p>
            We collect information from you when you visit our site, place an order, subscribe to our newsletter, or fill out a form. The types of information we may collect include your name, email address, mailing address, phone number, and credit card information.
          </p>
          <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
          <p>
            The information we collect from you may be used to personalize your experience, improve our website, process transactions, and send periodic emails.
          </p>
          <h2 className="text-2xl font-semibold mt-6">3. Information Protection</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>
          <h2 className="text-2xl font-semibold mt-6">4. Disclosure to Third Parties</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice.
          </p>
          <h2 className="text-2xl font-semibold mt-6">5. Third-Party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.
          </p>
          <h2 className="text-2xl font-semibold mt-6">6. Changes to Our Privacy Policy</h2>
          <p>
            If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.
          </p>
          <h2 className="text-2xl font-semibold mt-6">7. Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below:
          </p>
          <p>Same Day Ramps</p>
          <p>Email: info@samedayramps.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </Layout>
  );
}

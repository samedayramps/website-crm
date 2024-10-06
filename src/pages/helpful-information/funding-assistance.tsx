import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link'; // Add this import

export default function FundingAssistance() {
  return (
    <Layout
      title="Funding Assistance for Wheelchair Ramps"
      description="Explore funding options available for wheelchair ramp rentals and installations."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Funding Assistance for Wheelchair Ramps</h1>
        <div className="text-lg space-y-6">
          <p>
            There are various funding options available to help cover the cost of wheelchair ramp rentals and installations. These may include government programs, non-profit organizations, and insurance coverage.
            <Link href="/helpful-information/how-to-get-a-wheelchair-ramp" className="text-blue-600 hover:underline">Learn how to get a wheelchair ramp with funding assistance.</Link>
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Texas Department of Housing and Community Affairs (TDHCA)</h2>
          <p>
            TDHCA offers grants and loans for home modifications to improve accessibility. Eligible individuals can apply for funding to install wheelchair ramps, ensuring compliance with accessibility standards.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Veterans Affairs (VA) Benefits</h2>
          <p>
            Veterans may qualify for VA grants to modify their homes for improved accessibility. This can include the installation of wheelchair ramps, enhancing the veteran's ability to navigate their home safely.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Medicaid Waiver Programs</h2>
          <p>
            Some Medicaid waiver programs in Texas provide funding for home modifications, including wheelchair ramps, to support individuals with disabilities in living independently.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Non-profit Organizations in Texas</h2>
          <p>
            In addition to government programs, several non-profit organizations in Texas provide financial assistance for wheelchair ramp installations:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Easterseals Texas:</strong> Offers grants and support services for home accessibility projects.</li>
            <li><strong>United Way of Metropolitan Dallas:</strong> Provides funding opportunities for community-based accessibility initiatives.</li>
            <li><strong>RNLI (Ramps for Neighbors and Local Initiatives):</strong> Specializes in funding for local accessibility improvements.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">5. Insurance Coverage for Wheelchair Ramps</h2>
          <p>
            Depending on your insurance policy, wheelchair ramps and rentals may be covered under certain circumstances:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Homeowners Insurance:</strong> Some policies cover home modifications required by law or due to a covered loss. Review your policy or consult with your insurance provider to determine eligibility.</li>
            <li><strong>Health Insurance:</strong> While less common, some health insurance plans may cover home modifications for medical necessity. Contact your provider for details.</li>
            <li><strong>Automobile Insurance:</strong> If a ramp is needed due to a vehicle accident, private motor vehicle insurance might cover it. Check with your insurer regarding coverage.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">6. Local Government Programs</h2>
          <p>
            Some cities and counties in Texas offer grants or low-interest loans for home accessibility improvements. Check with your local housing authority or city council to explore available funding opportunities.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Faith-based Organizations</h2>
          <p>
            Faith-based groups like churches and community centers often provide assistance for home modifications. Reach out to local organizations to inquire about potential support for wheelchair ramp installations.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Federal Grants</h2>
          <p>
            Federal programs such as the Social Security Administration's (SSA) Ticket to Work program may offer funding or subsidies for home modifications, including wheelchair ramps, to support individuals with disabilities.
          </p>

          <h2 className="text-2xl font-semibold mt-6">9. Additional Funding Options</h2>
          <p>
            Beyond grants and insurance, consider these additional funding avenues:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Crowdfunding:</strong> Platforms like GoFundMe can help raise funds from the community for ramp installations.</li>
            <li><strong>Employer Assistance Programs:</strong> Some employers offer disability accommodations or assist with home modifications for employees.</li>
            <li><strong>State Grants:</strong> Explore other state-specific grants available for disability accommodations and home modifications through Texas state programs.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

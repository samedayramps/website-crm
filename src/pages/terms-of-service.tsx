import React from 'react';
import Layout from '../components/Layout';

export default function TermsOfService() {
  return (
    <Layout
      title="Terms of Service"
      description="Read the terms of service for Same Day Ramps, outlining the rules and regulations for using our website and services."
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="text-lg space-y-6">
          <p>
            Welcome to Same Day Ramps. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully.
          </p>
          <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>
            By accessing our website, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          <h2 className="text-2xl font-semibold mt-6">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Same Day Ramps' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <h2 className="text-2xl font-semibold mt-6">3. Disclaimer</h2>
          <p>
            The materials on Same Day Ramps' website are provided on an 'as is' basis. Same Day Ramps makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>
          <h2 className="text-2xl font-semibold mt-6">4. Limitations</h2>
          <p>
            In no event shall Same Day Ramps or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Same Day Ramps' website.
          </p>
          <h2 className="text-2xl font-semibold mt-6">5. Revisions and Errata</h2>
          <p>
            The materials appearing on Same Day Ramps' website could include technical, typographical, or photographic errors. Same Day Ramps does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
          <h2 className="text-2xl font-semibold mt-6">6. Links</h2>
          <p>
            Same Day Ramps has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Same Day Ramps.
          </p>
          <h2 className="text-2xl font-semibold mt-6">7. Site Terms of Use Modifications</h2>
          <p>
            Same Day Ramps may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
          <h2 className="text-2xl font-semibold mt-6">8. Governing Law</h2>
          <p>
            Any claim relating to Same Day Ramps' website shall be governed by the laws of the State of Texas without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </Layout>
  );
}

import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout title={`Blog Post: ${slug}`} description="Blog post content">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog Post: {slug}</h1>
        {/* Add dynamic content based on slug */}
      </div>
    </Layout>
  );
}

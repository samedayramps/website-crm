import React from 'react';
import Layout from '../../components/Layout';

export default function BlogIndex() {
  return (
    <Layout title="Blog" description="Our latest blog posts">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        {/* Add blog post list here */}
      </div>
    </Layout>
  );
}

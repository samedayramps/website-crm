import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.samedayramps.com/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <!-- Add more URLs here -->
  </urlset>`);
  res.end();
}
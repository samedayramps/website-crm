/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.samedayramps.com',
  generateRobotsTxt: true, // (optional)
  exclude: ['/admin/**', '/login'],
  // ...other options
};
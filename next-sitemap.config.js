/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.shdwfanglabs.com', // ← your live domain
  generateRobotsTxt: true, // ← will also create robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
};

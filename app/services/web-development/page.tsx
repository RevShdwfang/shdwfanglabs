import ServicePage from '@/components/ServicePage';

const webDevData = {
  title: 'Web Development',
  subtitle: 'Powerful websites built for performance, growth, and purpose-driven results.',
  packages: [
    {
      name: 'Starter',
      subtitle: 'Best for basic web presence with key functionality.',
      price: '$400',
      features: [
        'Basic responsive site (up to 3 pages)',
        'Speed-optimized deployment',
        'Contact form integration',
      ],
    },
    {
      name: 'Standard',
      subtitle: 'Ideal for growing businesses needing more flexibility.',
      price: '$500',
      features: [
        'Up to 6 pages',
        'Custom component development',
        'SEO optimization & metadata',
        'Basic CMS integration',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      subtitle: 'Complete full-stack solution for complex web needs.',
      price: '$600',
      features: [
        'Full-stack development (frontend + backend)',
        'Advanced CMS or API integration',
        'Dynamic UI features',
        'Full client handoff or maintenance option',
      ],
    },
  ],
  faq: [
   {
  question: 'Will my website be mobile-friendly?',
  answer: 'Yes — all sites are fully responsive and optimized for performance across mobile, tablet, and desktop devices.',
},
{
  question: 'How long does a typical website build take?',
  answer: 'Most builds take 2–4 weeks depending on complexity, revisions, and how quickly content is provided.',
},
{
  question: 'Do you offer hosting or domain setup?',
  answer: 'Yes — I can handle setup on platforms like Vercel, IONOS, or others. You’ll retain full ownership.',
},
{
  question: 'Can you integrate third-party tools or services?',
  answer: 'Definitely. I can connect email platforms, booking systems, payment gateways, analytics, and more.',
},
{
  question: 'Is SEO included in the build?',
  answer: 'Yes — every site includes basic SEO best practices like clean code, meta tags, and performance tuning. Advanced SEO available upon request.',
},
{
  question: 'What if I already have a design?',
  answer: 'Perfect — I can develop from your design files (Figma, PSD, etc.) and bring your vision to life.',
},
{
  question: 'Do you provide support after launch?',
  answer: 'Yes — I offer post-launch support and optional maintenance plans to keep things running smoothly.',
},
{
  question: 'Will my site be fast and optimized?',
  answer: 'Absolutely. I build with speed, accessibility, and performance in mind — no bloated themes or plugins.',
}

  ],
};

export default function WebDevPage() {
  return <ServicePage {...webDevData} currentSlug="web-development" />;
}

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
  process: [
    'Requirement gathering & tech stack planning',
    'Development with milestone updates',
    'Client testing & review',
    'Deployment and launch support',
  ],
  faq: [
    {
      question: 'What platforms or tools do you use?',
      answer: 'Next.js, Tailwind, Vercel, and custom APIs when needed.',
    },
    {
      question: 'Can I update the site myself later?',
      answer: 'Yes — I can set you up with a CMS or provide instructions for edits.',
    },
  ],
};

export default function WebDevPage() {
  return <ServicePage {...webDevData} currentSlug="web-development" />;
}

import ServicePage from '@/components/ServicePage';

const webDesignData = {
  title: 'Web Design',
  subtitle: 'Visually stunning and user-friendly websites tailored to your brand’s identity.',
  packages: [
    {
      name: 'Starter',
      subtitle: 'Perfect for basic web presence with a clean, single-page layout.',
      price: '$250',
      features: [
        '1-page design',
        'Mobile-optimized',
        'Basic SEO setup',
      ],
    },
    {
      name: 'Standard',
      subtitle: 'Great for growing brands that need multiple pages and interactivity.',
      price: '$500',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form setup',
        'Design revisions',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      subtitle: 'Full-service creative design for a complete, optimized experience.',
      price: '$900',
      features: [
        'Custom UI/UX',
        'Content Management System',
        'Animations and Interactivity',
        'Advanced SEO & Optimization',
      ],
    },
  ],
  process: [
    'Discovery & Requirements',
    'Wireframes & Mockups',
    'Feedback & Revisions',
    'Final Delivery',
  ],
  faq: [
    {
      question: 'How long does a project typically take?',
      answer: 'Anywhere from 1–4 weeks depending on the scope and responsiveness during revisions.',
    },
    {
      question: 'Do I need to provide content?',
      answer: 'You can! Or I can help write it based on your goals and audience.',
    },
  ],
};

export default function WebDesignPage() {
  return <ServicePage {...webDesignData} currentSlug="web-design" />;
}

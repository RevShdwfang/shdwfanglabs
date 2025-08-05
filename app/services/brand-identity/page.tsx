import ServicePage from '@/components/ServicePage';

const brandingData = {
  title: 'Brand Identity',
  subtitle: 'Logo systems and visual identity design that define your message and elevate your presence.',
  packages: [
    {
      name: 'Starter',
      subtitle: 'A focused start to defining your brand identity.',
      price: '$250',
      features: [
        'Logo design (1 concept)',
        'Color palette selection',
        'Basic usage guidelines',
      ],
    },
    {
      name: 'Standard',
      subtitle: 'A full-featured identity system for growing brands.',
      price: '$325',
      features: [
        '2–3 logo concepts & refinements',
        'Full logo system (primary, alt, icon)',
        'Typography & color system',
        'Mini brand guide PDF',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      subtitle: 'A complete branding kit for content creators and businesses.',
      price: '$400',
      features: [
        'Complete branding system',
        'Social media kit',
        'Favicon & print-ready exports',
        'Comprehensive brand book (PDF)',
      ],
    },
  ],
  process: [
    'Brand discovery call',
    'Concept sketches & direction selection',
    'Design and feedback rounds',
    'Final asset delivery and style guide',
  ],
  faq: [
    {
      question: 'How many revisions are included?',
      answer: 'Each tier includes 1–3 rounds depending on the package.',
    },
    {
      question: 'Do I own the final logo?',
      answer: 'Yes. You’ll receive full commercial usage rights.',
    },
  ],
};

export default function BrandIdentityPage() {
  return <ServicePage {...brandingData} currentSlug="brand-identity" />;
}

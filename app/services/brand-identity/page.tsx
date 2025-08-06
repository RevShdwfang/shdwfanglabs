import ServicePage from '@/components/shared/ServicePage';

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
  faq: [
    {
  question: 'What’s included in a brand identity package?',
  answer: 'Depending on the tier, you’ll get a custom logo, color palette, font recommendations, social assets, and a brand guide.',
},
{
  question: 'Can you redesign or improve my existing logo?',
  answer: 'Absolutely. I can modernize your current identity while preserving the essence of your brand.',
},
{
  question: 'What if I’m not sure what direction I want?',
  answer: 'No problem — I’ll guide you through a discovery phase to explore your vision, audience, and style preferences.',
},
{
  question: 'Do I get different logo versions?',
  answer: 'Yes — you’ll receive full logo variations including horizontal, vertical, icon-only, and dark/light background options.',
},
{
  question: 'What file formats will I receive?',
  answer: 'You’ll get high-resolution vector files (SVG, PDF) and raster formats (PNG, JPG), ready for print, web, and social.',
},
{
  question: 'Is there a brand guide included?',
  answer: 'Yes — all standard and premium tiers include a brand guideline PDF with usage rules, spacing, colors, and typography.',
},
{
  question: 'Can I use the logo for merch or content?',
  answer: 'Definitely. All final assets are yours to use on stream, products, business cards — wherever you need.',
},
{
  question: 'Will you help with future updates?',
  answer: 'Yes — I offer follow-up design support and brand expansion packages if you grow or rebrand later on.',
}

  ],
};

export default function BrandIdentityPage() {
  return <ServicePage {...brandingData} currentSlug="brand-identity" />;
}

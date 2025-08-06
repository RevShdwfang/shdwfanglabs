import ServicePage from '@/components/shared/ServicePage';

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
  faq: [
    {
  question: 'Can you match my existing brand or logo?',
  answer: 'Absolutely. I can work with your current assets or help refine them into a cohesive design system.',
},
{
  question: 'Will my site be mobile-friendly?',
  answer: 'Yes — all designs are responsive by default and tailored to look great on phones, tablets, and desktops.',
},
{
  question: 'Do you offer revisions?',
  answer: 'Yes — every design package includes at least 1–2 rounds of revisions to make sure it feels right for you.',
},
{
  question: 'What if I don’t know what I want yet?',
  answer: 'No problem. I’ll guide you through a style and mood discovery process to uncover what fits best.',
},
{
  question: 'Can you design around specific goals like conversions or leads?',
  answer: 'Definitely. Design should do more than look good — I focus on UX that supports your goals.',
},
{
  question: 'Do you use templates or design from scratch?',
  answer: 'All designs are custom-built. No cookie-cutter templates — your site will be one of a kind.',
},
{
  question: 'What design tools do you use?',
  answer: 'Figma, Illustrator, and other industry-standard tools depending on the project’s needs.',
},
{
  question: 'Will you include animations or interactions?',
  answer: 'Yes — subtle motion, hover effects, and scroll-based interactions can all be incorporated to enhance the experience.',
},
{
  question: 'Can you also develop the site after it’s designed?',
  answer: 'Yes — I offer both design and development. You can get everything built and launched in one place.',
}


  ],
};

export default function WebDesignPage() {
  return <ServicePage {...webDesignData} currentSlug="web-design" />;
}



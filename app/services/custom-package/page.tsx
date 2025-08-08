// app/custom-package/page.tsx
import CustomPackageBuilder from '@/components/CustomPackageBuilder';

export const metadata = {
  title: 'Custom Package',
  description: 'Pick exactly what you need and get an instant estimate.',
};

const faq = [
  { question: 'How does pricing work?', answer: 'Pick any items you want; the estimate updates instantly. Final quote is confirmed after a quick discovery chat.' },
  { question: 'Can I mix services (design + dev + stream)?', answer: 'Yep. The builder is cross-service—choose whatever fits your project.' },
  { question: 'How do I request the quote?', answer: 'Click “Request Custom Quote.” It pre-fills your selections on the contact page.' },
  { question: 'Can I change my selection later?', answer: 'Of course. We’ll refine scope and pricing together before any work begins.' },
];

export default function CustomPackagePage() {
  return <CustomPackageBuilder faq={faq} currentSlug="custom-package" />;
}

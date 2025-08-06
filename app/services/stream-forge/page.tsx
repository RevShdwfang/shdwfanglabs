import ServicePage from '@/components//shared/ServicePage';


const streamForgeData = {
  title: 'Stream Forge',
  subtitle: 'Custom overlays, alerts, and stream branding tailored to amplify your unique presence.',
  packages: [
    {
      name: 'Starter',
      subtitle: 'Perfect for new streamers looking to polish their setup.',
      price: '$150',
      features: [
        'Stream screen layout (BRB/Starting Soon)',
        'Simple static overlays',
        'Basic alert graphics',
        
      ],
    },
    {
      name: 'Standard',
      subtitle: 'Level up your brand with animated overlays and transitions.',
      price: '$225',
      features: [
        'Full overlay pack',
        'Custom animated alerts',
        'Scene transitions',
        'Logo watermark or stinger',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      subtitle: 'Complete stream identity tailored for full brand immersion.',
      price: '$300',
      features: [
        'Complete stream branding system',
        'Custom stinger transition animation',
        'Profile panel set & VOD screens',
        'Theme-consistent overlays & alerts',
      ],
    },
  ],
  faq: [
   {
    question: 'How does it work?',
    answer: 'Discuss brand/theme direction, Mockups & design previews, Animation and asset prep, Final delivery in all needed formats.',
  },
  {
    question: 'What platforms are these assets compatible with?',
    answer: 'OBS, Streamlabs, Kick, YouTube, and Twitch — we can tailor for any setup.',
  },
  {
    question: 'Can I request a theme or vibe?',
    answer: 'Absolutely. I specialize in lore-driven and aesthetic branding!',
  },
  {
    question: 'Do I need to provide any files or references?',
    answer: 'You can, but it’s not required. If you have logos, style guides, or references, they’ll help speed up the process.',
  },
  {
    question: 'How long does it take to complete an order?',
    answer: 'Most projects are completed within 5–10 business days depending on complexity. Rush options available.',
  },
  {
    question: 'Can I use these assets for commercial streaming or monetized content?',
    answer: 'Yes — all assets are built with full usage rights for content creators and monetized channels.',
  },
  {
    question: 'What if I need revisions?',
    answer: 'Every order includes 2 rounds of revisions to fine-tune your vision. Additional edits can be added if needed.',
  },
  {
  question: 'How will I receive my files?',
  answer: 'You’ll receive organized, high-resolution files directly through your secure client portal. Everything will be neatly packaged and accessible anytime.',
}
  ],
};

export default function StreamForgePage() {
  return <ServicePage {...streamForgeData} currentSlug="stream-forge" />;
}

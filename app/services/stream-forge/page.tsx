import ServicePage from '@/components/ServicePage';

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
  process: [
    'Discuss brand/theme direction',
    'Mockups & design previews',
    'Animation and asset prep',
    'Final delivery in all needed formats',
  ],
  faq: [
    {
      question: 'What platforms are these assets compatible with?',
      answer: 'OBS, Streamlabs, Kick, YouTube, and Twitch — we can tailor for any setup.',
    },
    {
      question: 'Can I request a theme or vibe?',
      answer: 'Absolutely. I specialize in lore-driven and aesthetic branding!',
    },
  ],
};

export default function StreamForgePage() {
  return <ServicePage {...streamForgeData} currentSlug="stream-forge" />;
}

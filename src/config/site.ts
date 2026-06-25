/**
 * Central site configuration — edit this file to update your name,
 * bio, external links, current objectives, and world overview.
 */
export const siteConfig = {
  title: 'Overworld Archive',
  tagline: 'A personal chronicle of one Minecraft world',
  name: '[Your Name]',
  bio: 'I am a highschool student who enjoys playing minecraft and designing hardcore builds and machines in game. I learn from both Chinese and English sources about the game, which makes my tutorial style unique and inspiring',
  projectIntro:
    'This site documents my long-term Minecraft single-player world — builds, redstone contraptions, survival milestones, and the lessons learned along the way. Every article and timeline entry is written in Obsidian and published through GitHub.',
  github: 'https://github.com/aeroptot',
  modrinth: 'https://modrinth.com/',
  copyrightYear: 2026,

  externalLinks: [
    {
      label: 'Modrinth',
      href: 'https://modrinth.com/',
      description: 'Mods and resource packs I use',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/your-username',
      description: 'Source code for this site',
    },
  ],

  currentObjectives: [
    'Build more automated machines around the base',
    'Build the expansive base in End',
    'Plan for the wither skeleton farm',
    'Optimize the sand duper',
  ],

  worldOverview: {
    currentVersion: '26.1.2',
    currentPhase: 'Early expansion',
    mainBase: 'Plains village',
    seed: '8500081009970950196',
    playtime: '198 game days',
    statistics: [
      { label: 'Chunks explored', value: '~400' },
      { label: 'Major builds', value: '8' },
      { label: 'Nether portals', value: '3' },
      { label: 'Villages connected', value: '2' },
    ],
  },

  featuredScreenshot: '/images/world/featured-landscape.svg',
  heroImage: '/images/world/hero-banner.jpg',
} as const;

export type SiteConfig = typeof siteConfig;

// @ts-check
// Note: type annotations allow type checking and IDE autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jim Beebe, Writer',
  tagline: 'Technical Documentation, AI-Augmented Workflows, and Content Architecture',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.jimbeebewriter.com',
  baseUrl: '/',

  // Explicit trailingSlash setting to resolve GitHub Pages deployment warning
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'Jim-Beebe-Writer', 
  projectName: 'Website', 

  onBrokenLinks: 'throw',
  
  // Migrated to markdown.hooks to fix the deprecation warning
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/Jim-Beebe-Writer/Website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // editUrl: 'https://github.com/Jim-Beebe-Writer/Website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/JimBeebe-social-card.jpg',
      navbar: {
        title: 'Jim Beebe',
        logo: {
          alt: 'Jim Beebe Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          {to: '/blog', label: 'Articles', position: 'left'},
          {
            href: 'https://github.com/Jim-Beebe-Writer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Work',
            items: [
              {
                label: 'Portfolio & Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Jim-Beebe-Writer',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jim-beebe-lead-technical-writer/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jim Beebe. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
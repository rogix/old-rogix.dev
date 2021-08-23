module.exports = {
  title: "Rogix",
  customFields: {
    name: "Rogério",
    lastName: "Pereira",
    subtitle: "Desenvolvedor Javascript",
  },
  tagline: "Olá!",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon_io/favicon.ico",
  organizationName: "rogix", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Rogix",
      // logo: {
      //   alt: "Rogério",
      //   src: "img/meme.jpg",
      // },
      items: [
        // { to: "blog", label: "Blog", position: "left", className: "blog" },
        // {
        //   href: "https://github.com/rogix",
        //   position: "right",
        //   className: "header-github-link",
        //   "aria-label": "GitHub repository",
        // },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()}`,
    },
    hideableSidebar: true,
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/rogix",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

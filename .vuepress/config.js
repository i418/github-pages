module.exports = {
  title: 'Hello _i418',
  description: 'Just playing around',
  base: '/github-pages/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'GitHub', link: 'https://github.com/i418' }
    ],
    sidebar: {
      // fallback
      '/': [
        '',        /* / */
        'about'    /* /about.html */
      ]
    }
  }
}
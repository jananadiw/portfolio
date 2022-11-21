/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
module.exports = {
    locales: ['en-US', 'kr'], // Array with the languages that you want to use
    defaultLocale: 'en-US', // Default language of your website
    localeDetection: true,
    pages: {
      '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
      '/about': ['about'],
      '/projects': ['projects'],
      '/work': ['work']
    },
  };
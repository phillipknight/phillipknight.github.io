// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Phillip Kent Knight',
  siteUrl: 'https://phillipknight.github.io',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-107681719-3'
      }
    },
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1LVQf_ZponKTgvwUO7SAeFQheaF56dktYj0iHyWAMD5o',
        apiKey: 'AIzaSyBsEB2sbiNAMnVf23kNQtsVeIVh1G5BVls'
      }
    ,  
  }
]}


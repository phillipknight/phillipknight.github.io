// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Phillip Kent Knight',
  siteUrl: 'https://phillipkentknight.com',
  plugins: [
    {
      use: "gridsome-source-google-sheets-v2",
      options: {
        apiKey: process.env.GS_API_KEY,
        spreadsheets: [
          {
            spreadsheetId: process.env.SPREADSHEET_CV,
            sheets: [
              {
                sheetName: "workhistory",
                collectionName: "WorkHistory"
              }
            ]
          }
        ]
      }
    },
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: '06a82jqg',
        dataset: 'blog',
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        token: process.env.SANITYBLOG,
        overlayDrafts: false,
        watchMode: false,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default'
      }
    }
  ]
}

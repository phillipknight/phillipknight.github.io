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
    }
  ]
}

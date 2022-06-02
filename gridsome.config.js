// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()
module.exports = {
    siteName: 'Fredtun',
    plugins: [{
            use: 'gridsome-source-sanity',
            options: {
                projectId: 'r44b6dmp',
                dataset: 'fredtun',

            }
        },
        {
            use: '@gridsome/source-airtable',
            options: {
                apiKey: process.env.AIRTABLE_API_KEY, // required
                base: 'appFT0o0L7aB2kmyV', // required
                tables: [{
                    name: 'Leieavtaler', // required
                    typeName: 'bookedDates', // required
                }],
                tableName: 'Fredtun', // required
            },
        },
    ],
    templates: {
        SanityBlogpost: '/blogg/:title/:id'
    },
}
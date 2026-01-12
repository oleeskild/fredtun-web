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
                projectId: 'obo7jda2',
                dataset: 'production',

            }
        }
    ],
    templates: {
        SanityBlogpost: '/blogg/:title/:id',
        SanityEvent: '/arrangement/:title/:id',
    },
}

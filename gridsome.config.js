// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Fredtun',
  plugins: [{
    use: 'gridsome-source-sanity',
    options: {
      projectId: 'r44b6dmp',
      dataset: 'fredtun',

    }
  }],
  templates: {
    SanityBlogpost: '/blog/:title/:id'
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'PUBG Schedule',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'PUBG Schedule - Playerunknowns Battlegrounds tournament scheduling information, live streams and player information'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  plugins: ['~plugins/buefy'],
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}

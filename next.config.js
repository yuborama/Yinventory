// next.config.js
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
module.exports = withFonts()

module.exports = withSass({
    
  devIndicators: {
    autoPrerender: false,
  },
  env:{

}
})

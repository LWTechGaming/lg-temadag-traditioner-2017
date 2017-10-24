const webServer = require('live-server')

// Require config based on NODE_ENV
let Config
process.env.NODE_ENV === 'production' ? Config = require('./config.prod.json') : Config = require('./config.dev.json')

// Start webserver
webServer.start({
  port: Config.port,
  host: Config.host,
  root: Config.docRoot,
  open: Config.openBrowser,
  file: Config.notFoundFile,
  wait: Config.waitBeforeReload,
  logLevel: Config.logLevel
})

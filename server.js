const webServer = require('live-server')

// Require config based on NODE_ENV
let Config

if (process.env.NODE_ENV === 'production') {
  console.log('Starting in production mode...'.green)
  Config = require('./config.prod.json')
} else {
  console.log('Starting in development mode...'.green)
  Config = require('./config.dev.json')
}

// Handle the edge case where the config doesn't load for some reason
if (!Config) {
  console.log('Config failed to load! Exiting...'.red)
  process.exit()
}

// Define webserver options
let options = {
  port: Config.port,
  host: Config.host,
  root: Config.docRoot,
  open: Config.openBrowser,
  file: Config.notFoundFile,
  wait: Config.waitBeforeReload,
  logLevel: Config.logLevel
}

// Start webserver
webServer.start(options)

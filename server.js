const webServer = require('live-server')
const argv = require('yargs').argv

// Init config variable
let Config

// If the program is started with --production, use production config
if (argv.production) {
  console.log('Starting in production mode...'.magenta)
  Config = require('./config.prod.json')
} else {
  console.log('Starting in development mode...'.magenta)
  Config = require('./config.dev.json')
}

// Handle edge case of config not loading
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

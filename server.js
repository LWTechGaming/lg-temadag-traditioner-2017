const server = require('live-server')
const argv = require('yargs').argv
const colors = require('colors') // eslint-disable-line no-unused-vars

// Init config variable
let Config

// If the program is started with --production, use production config
if (argv.production) {
  Config = require('./config.prod.json')
  console.log(`Starting in production mode on http://${Config.host}:${Config.port}...`.magenta)
} else {
  Config = require('./config.dev.json')
  console.log(`Starting in development mode on http://${Config.host}:${Config.port}...`.magenta)
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
server.start(options)

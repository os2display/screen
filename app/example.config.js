/**
 * Sets up the config for the app.
 */
window.config = {
  // Used to activate screen (rest API) and load resources.
  "resource": {
    "server": "//indholdskanalen.vm/",
    "uri": 'proxy'
  },
  // Used by web-socket.
  "ws": {
    "server": "https://indholdskanalen.vm/"
  },
  // API key to use.
  "apikey": "059d9d9c50e0c45b529407b183b6a02f",
  // If cookie is secure it's only send over https.
  "cookie": {
    "secure": false
  },
  // Display debug messages.
  "debug": false,
  // Software version.
  "version": "dev",
  // itkLog configuration.
  "itkLog": {
    "version": "1",
    "errorCallback": null,
    "logToConsole": true,
    "logLevel": "none"
  }
};

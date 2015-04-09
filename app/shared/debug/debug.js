/**
 * @file
 * Contains the debug module.
 */

/**
 * Setup the module.
 */
(function() {
  'use strict';

  var app;
  app = angular.module("itkDebug", []);

  /**
   * debug factory.
   *
   * Contains the debug methods.
   */
  app.factory('debug', function () {
    var factory = {};

    /**
     * Outputs the debug log message.
     * @param message
     */
    factory.log = function (message) {
      if (window.config.debug && window.console) {
        var d = new Date();
        console.log(d + ':  ' + message);
      }

      if (typeof Raven !== 'undefined') {
        Raven.captureMessage(message, { tags: { type: "log" }});
      }
    };

    /**
     * Outputs the debug error message.
     * @param message
     */
    factory.error = function (message) {
      if (window.config.debug && window.console) {
        var d = new Date();
        console.error(d + ':  ' + message);
      }

      if (typeof Raven !== 'undefined') {
        Raven.captureMessage(message, { tags: { type: "error" }});
      }
    };

    /**
     * Outputs the debug info message.
     * @param message
     */
    factory.info = function (message) {
      if (window.config.debug && window.console) {
        var d = new Date();
        console.info(d + ':  ' + message);
      }

      if (typeof Raven !== 'undefined') {
        Raven.captureMessage(message, { tags: { type: "info" }});
      }
    };

    return factory;
  });
}).call(this);

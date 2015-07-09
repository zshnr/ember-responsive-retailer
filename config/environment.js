/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'img-src': "'self' data:",
      'frame-src': "self http://localhost:4200/chrome-extension-localstorage-manager-iframe-notification-404.html",
      'font-src': "'self' https://fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com"
    },
    modulePrefix: 'ember-responsive-retailer',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {

      }
    },

    APP: {

    }
  };

  if (environment === 'development') {

  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

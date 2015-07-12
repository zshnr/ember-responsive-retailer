/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/polyfills/polyfill.min.js');
app.import('bower_components/localforage/dist/localforage.min.js');
app.import('bower_components/bootswatch/paper/bootstrap.min.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf', {
  destDir: 'fonts'
});

module.exports = app.toTree();

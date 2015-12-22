/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorFiles: [
      'material-design-lite/material.css',
      'material-design-lite/dist/templates/text-only/styles.css'
    ]
  });
  return app.toTree();
}
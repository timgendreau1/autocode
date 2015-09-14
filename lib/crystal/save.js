// Generated by CoffeeScript 1.9.3
(function() {
  var fs, mkdirp, save, yaml;

  fs = require('fs');

  mkdirp = require('mkdirp');

  yaml = require('js-yaml');

  save = function() {
    var config;
    if (!fs.existsSync(this.path + "/.crystal")) {
      mkdirp.sync(this.path + "/.crystal");
    }
    config = JSON.parse(JSON.stringify(this.config));
    if (config.host === 'github.com') {
      delete config.host;
    }
    delete config.path;
    config = yaml.safeDump(config);
    return fs.writeFileSync(this.path + "/.crystal/config.yml", config);
  };

  module.exports = save;

}).call(this);
require('app-module-path').addPath(__dirname + '/../app/js-cov');
global.trigger = new(require('./trigger.js'));
new(require('index/index.js'))(__dirname + '/../app/cfg', __dirname + '/userdata');

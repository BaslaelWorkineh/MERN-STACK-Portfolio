#!/usr/bin/env node

require('proof')(3, function (equal) {
  var reactor = require('../..').createReactor();

  reactor.on('get', '/index.html', function (method, url, extra) {
    equal(method, 'get', 'method');
    equal(url, '/index.html', 'url');
    equal(extra, 1, 'extra');
  });

  reactor.react('get', '/index.html', 1);
});

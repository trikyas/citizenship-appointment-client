'use strict';

const express = require('express'),
      sassMiddleware = require('node-sass-middleware'),
      webpack = require('webpack'),
      webpackMiddleware = require('webpack-dev-middleware'),
      path = require('path'),
      app = express(),
      default_port = (process.env.PORT || 3000);

app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'dist'),
    debug: true,
    outputStyle: 'nested',
    sourceMap: path.join(__dirname, 'dist', 'bundle.css.map')
}));

app.use(webpackMiddleware(webpack(require('./webpack.config')), {
    noInfo: false,
    quiet: false,
    lazy: true,
    publicPath: "/",
    stats: {
        colors: true
    }
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('connect-livereload')());  // runs livereload server and serves livereload.js
require('express-livereload')(app, { watchDir: path.join(__dirname) });  // inserts <script> reference to livereload.js
app.use('/', express.static(path.join(__dirname, 'views')));

let server = app.listen(default_port, function () {
  let port = server.address().port;
  console.log('Listening on port ' + port);
});

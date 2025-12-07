const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/"),
      "buffer": require.resolve("buffer/"),
      "process": false,
      "path": false,
      "crypto": false,
      "fs": false,
      "zlib": require.resolve("browserify-zlib")
    }
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer']
    })
  ];

  return config;
}; 
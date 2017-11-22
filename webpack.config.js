const path = require('path');

module.exports = {
  entry: [
      // "./scripts/instant-loan-form.ts",
      "./scripts/loan-events.ts",
      // "./scripts/academy-modules-usage.ts",
      // "./scripts/academy-types.ts",
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'source-map'
};
var config = {
  //DIRNAME GETS THE EXACT DIRECTORY WE ARE IN
  //GOES THROUGH THE FILES AS A CHAIN BUNDLING EVERYTHING THAT REQUIRED
  entry: __dirname + '/src/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devtool: 'source-map'
};

module.exports = config;

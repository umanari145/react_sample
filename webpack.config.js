var path    = require('path');



module.exports = {
  entry: path.join(__dirname,'/src/js/main.js'),
  output:{
    path: path.join(__dirname,'dest'),
    filename:'./app.js'
  },
  devtool:'init-source-map',
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}

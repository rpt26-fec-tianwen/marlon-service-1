module.exports = {
  mode: 'development',
  entry: __dirname + '/client/src/index.jsx',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: __dirname + '/node_modules',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.jsx.html'],
    modules: ['./node_modules']
  }
};

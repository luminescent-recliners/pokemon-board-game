const path = require( 'path' );
const CopyWebpackPlugin = require('copy-webpack-plugin')

const src = path.resolve( __dirname, 'src' );
const dest = path.resolve( __dirname, 'dist' );

module.exports = {
  mode: 'development',
  entry: {
    app: path.join( src, 'app.js' ),
    // libs: path.join( src, 'libs.js' )
  },
  output: {
    filename: '[name].js',
    path: dest,
  },
  // devServer: {
  //   contentBase: src,
  // },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/**/*.html',
        to: '[path][name].html',
        transformPath: path => path.replace('src/', '')
      },
      {
        from: './src/assets/**/*',
        to: './',
        transformPath: path => path.replace('src/', '')
      },
      {
        from: './src/img/**/*',
        to: './',
        transformPath: path => path.replace('src/', '').replace('img', 'assets' )
      },
      {
        from: './src/**/*.css',
        to: './',
        transformPath: path => path.replace('src/', '')
      }
    ],
    {
      logLevel: 'error'
    })
  ],
  // resolve: {
  //   // extensions: [ '.ts', 'tsx', '.js', '.jsx' ]
  //   modules: [ 'node_modules' ]
  // },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: "style-loader" 
      //     }, 
      //     {
      //       loader: "css-loader"
      //     }, 
      //     {
      //       loader: "less-loader"
      //     }
      //   ]
      // },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /(node_modules)/,
      //   loader: 'ts-loader',
      // }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
};



var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [ 
  'react/dist/react.min.js',
  'react-router/dist/react-router.min.js',
  'moment/min/moment.min.js'
];



var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      	test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      	loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
      	query: {
			     presets: ['react', 'es2015']
      	}
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    },
    // LESS
    {
      test: /\.less$/,
      loader: 'style!css!less'
    },

    // SASS
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    // image
    { 
      test: /\.(png|jpg)$/, 
      loader: 'url?limit=25000' 
    }]
  }
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
var path = require('path');

module.exports = {
	entry: [
    	'webpack/hot/dev-server',
    	path.resolve(__dirname, 'app/main.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module:{
    	loaders:[{
	      	test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
	      	loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
	      	include: __dirname // 把query 转移到.babelrc文件中
	    }]
    }
}
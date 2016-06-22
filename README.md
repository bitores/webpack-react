#Webpack React 学习笔记

>[React版本](http://www.open-open.com/news/view/1ce3bcb)
>[React 0.14 发布，拆分为 react 和 react-dom](http://www.open-open.com/news/view/1ce3bcb)
>
0.14(2015-11-17)-React 0.14 发布，拆分为 react 和 react-dom,但React.render还可以用
15.0(2016--) - React 15.00发布，彻底废弃 React.render等

>在React 0.14之前的版本， 我们使用React Web相关的能力的时候， 只需要引入一个JS文件， react.js,  但React 0.14之后(包括0.14), react的设计团队为了将React的应用场景更加细化，同react-native, react-art, react-canvas, react-three 等形成并行， 将React Web的能力拆分成了 react.js, react-dom.js 并将DOM操作相关的接口，放在了react-dom.js的ReactDOM对象上，所以涉及一些API的变更：
React.render 变成了 ReactDOM.render
React.findDOMNode 变成了 ReactDOM.findDOMNode  等
至于React.render 这些在0.14.X的版本还能用，但是会有warning提示消息，0.15版本将会被彻底废弃，希望大家尽早规避使用老接口。

>
```
query:{
	plugins:['transform-runtime'],
	presets:['es2015','stage-0','react']
}
```

>
+ React 发明了jsx,所以jsx 与 的React同时出现
+ npm install babel-preset-es2015 --save-dev  支持ES2015
+ npm install babel-preset-react --save-dev 支持jsx
+ npm install babel-preset-stage-0 --save-dev 支持ES7
+ npm install babel-polyfill --save
+ npm install babel-runtime  --save
+ npm install babel-plugin-transform-runtime --save-dev
/*减少打包的时候重复代码，以上要注意是放在dev还是非dev上！*/

> es5写法
>
+ var React = require('react'); 
+ var ReactDom = require('react-dom');

> es6写法
>
+ import React from 'react'
+ import React from 'react-dom'

>[router版本](https://github.com/reactjs/react-router/blob/v1.0.0-rc1/UPGRADE_GUIDE.md)
>
React Router v1.0, the run method
```
// 将匹配的路由渲染到 DOM 中
Router.run(routes, Router.HashLocation, function(Root){
  ReactDOM.render(<Root />, document.body);
});
```

>now,like this
>

###lesson01
>webpack + js
>
+ npm install
+ npm run dev
+ http://localhost:8080



###lesson02 
>webpack + jsx + react(es5写法)
>
+ npm install
+ npm run dev
+ http://localhost:8080



###lesson03
>webpack + jsx + react(es6写法)
>
+ npm install
+ npm run dev


###lesson04
>webpack + jsx + react-router


###lesson05
>webpack 项目
>
+ npm install && bower install
+ npm run start
+ npm run build
>
>TODO: testing
>
+ npm run test

###lesson06
>webpack + jsx + react + less



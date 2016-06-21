# 说明
## Typescript的使用
1.没有使用typings直接去 https://github.com/DefinitelyTyped/DefinitelyTyped/find/master 下载。   
2.引用 `/// <reference path="../typings/browser.d.ts" />`。
## 文件
* components：组件文件，放置基本组件，也就是[redux](https://leecade.gitbooks.io/redux-in-chinese/content/docs/basics/UsageWithReact.html)中说的“笨拙组件”。   
 * 读取数据：从 props 获取数据。   
 * 修改数据：从 props 调用回调函数。    
 * 除基本的state甚至没有state，所有数据以及状态修改都是通过props，props是containes中的容器组件提供的。
* containers：容器组件，页面级组件，由多个基本组件或容器组件组成也就是[redux](https://leecade.gitbooks.io/redux-in-chinese/content/docs/basics/UsageWithReact.html)中说的“智能”。	
 * 读取数据：从 Redux 获取 state。   
 * 修改数据：向 Redux 发起 actions。
 * 通过 react-redux 提供的 connect() 方法将包装好的组件连接到Redux再传递给components。
* utils：帮助类
* typings：typescript的d.ts文件不是使用的typings命令添加的直接复制过来的，用命令的时候老出问题，应该是我家里的网络不好。
* .gitignore：git忽略文件。
* tsconfig.json：编译typescript的配置文件。
* webpack.config.js：webpack配置文件。

## 状态维护
### 组件自己维护状态：
一些组件之间不交互，或者很少交互。如果其他组件要改变组件自己维护的状态而不是redux维护的可以通过事件总线的形式交互。
### redux维护状态，也就是redux提倡的无状态组件：
一般，内容数据，其他组件经常修改的状态。
# 说明
## Typescript的使用
1.没有使用typings直接去 https://github.com/DefinitelyTyped/DefinitelyTyped/find/master 下载。   
2.引用 `/// <reference path="../typings/browser.d.ts" />`。
## 文件
* components组件文件，放置基本组件，也就是[redux](https://leecade.gitbooks.io/redux-in-chinese/content/docs/basics/UsageWithReact.html)中说的“笨拙组件”。   
读取数据：从 props 获取数据。   
修改数据：从 props 调用回调函数。    
除基本的state甚至没有state，所有数据以及状态修改都是通过props，props是containes中的容器组件提供的。
* containers容器组件，页面级组件，由多个基本组件或容器组件组成也就是[redux](https://leecade.gitbooks.io/redux-in-chinese/content/docs/basics/UsageWithReact.html)中说的“智能”。	
读取数据：从 Redux 获取 state。   
修改数据：向 Redux 发起 actions。
通过 react-redux 提供的 connect() 方法将包装好的组件连接到Redux再传递给components
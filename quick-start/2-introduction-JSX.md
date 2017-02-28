# JSX介绍
>it is a syntax extension to JavaScript

在JSX中，你可以
* 嵌入任何的JavaScript表达式
* 可以直接使用if、while等条件判断
* 属性值直接可以使用双引号或者插入任何的JavaScript表达式
* 可以不用有闭合标签，除非拥有子节点或元素
* JSX可以预防XSS

JSX相当于 Objects
因为Babel实际上是将JSX转成了`React.createElement()`,所以下面两种方式是等价的
```javascript
const element = (
  <h1>
    hello world
  </h1>
)
```

```javascript
const elment = React.createElement(
  'h1',
  {className: 'green'},
  'Hello'
)

```

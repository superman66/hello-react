# Rendering Elements
Elemnts 是React app 中最小构建单元。所有的都是由Element组成。

## Rendering an Element into the DOM
React 通过 一个 Root Node 节点来渲染 React DOM，所有的 React DOM都通过`ReactDOM.render()`方法渲染在该节点下。

```javascript
const element = <h1>Hello</h1>

ReactDOM.render(
  element,
  document.getElementById('root');
)
```

## Updating the Rendered Element
React Element 是不可变的，一旦穿件就不能改变其子元素或者属性。
目前我们所知道的更新更新UI的方法就是创建一个新的元素，然后调用`ReactDOM.render()`更新UI。
以时钟为例：
```javascript
function tick(){
  const element = (
    <div>
      <h1>Hello</h1>
      <p>It is {Date.now()}</p>
    </div>
  )

  ReactDOM.render(
    element,
    document.getElementById('root');
  )
}

setInterval(tick, 1000)

```

## React Only Update What's Necessary
React 会通过diff算法去比对，然后只更新需要更新的DOM部分，而不是全部更新。

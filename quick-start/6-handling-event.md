# Handling Event
事件处理大致与DOM事件处理相似，但存在几点差异
1. 事件名以camelCase命名，而非DOM中的小写
2. 使用JSX传递Event Handler或者函数名，而不是用String

For example for 2: using JSX
```javascript
<button onClick={clickHandler}>
Click me
</button>
```

Use ES6 Class with React
```javascript
class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this); // ?
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render(){
    return{
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON': 'OFF'}
      </button>
    }
  }
}

ReactDOM.render(
  <Toggle/>
  document.getElementById('root');
)
```
为什么需要`this.handleClick = this.handleClick.bind(this);`手动去绑定this。
因为在ES6 Class中this 默认指向类的实例。所以要绑定到button
这个对象时，必须手动绑定。
所在在引用一个method 的时候没有采用`()`，就必须在constructor中手动绑定。

当然如果你不想手动绑定的话，还可以使用其他两种方式来绑定this;
**第一种：使用`property initializer syntax`**，推荐使用这种方式

```javascript
class Toggle extends React.Component{
  handleClick = () => {
    console.log(this);
  }
  render(){
    // do something
  }
}
```

**第二种：使用`arrow function`箭头函数**
```javascript
class Toggle extends React.Component{
  handleClick(){
    console.log(this);
  }

  render(){
    <button onClick={(e) => this.handleClick(e)}>
      Click Me
    </button>
  }
}
```

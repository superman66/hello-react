# State and Lifecycle
```javascript
class Clock extends React.Component{
  constructor(props){
    super(props);
  }
  return (
    <div>
      <h1>Hello+ {props.date}</h1>
    </div>
  )
}

function tick() {
  ReactDOM.render(
    <Clock date= {new Date()} />,
    document.getElementById('root')
  )
}
setInterval(tick, 1000)
```
 上面的方式并不是我们想要的，Component 内部实现自动更新,所以可以采用ES6 Class的方式：将`render()`函数放到Component内部中,并添加state
 ```javascript
 Class Clock extends React.Component{
   constructor(props){
     super(props);
     this.state = {data: Date.now()}
   }
   render(){
      return (
        <div>
          <h1>date: {this.state.date}</h1>
        </div>
      )
   }
 }
 ReactDOM.render(
   <Clock />,
   document.getElementById('root')
 )
 ```

 ## 生命周期
 * compponentDidMount(){}
 * compponentWillUnmount(){}

设置`state`应该使用`setState()`方法
```javascript
// Wrong
this.state.name = 'suuperman'

//correct
this.setState({'name', 'supermna'})
```

## state更新只能是异步
所以可以采用函数的方式而非object，
```javascript
this.setState((prevState, props) => ({
  counter: prevState,counter + props.increment
}))
```
## 单向数据流
Component的props或者state是单向的。\

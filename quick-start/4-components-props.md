# Component And Props
Component 组件、可复用。
Component有Functional、Class两种写法
**Functional**
```javascript
function MyComponent(props) {
  return <h1>Hello, {props.name}</h1>
}
```
**Class**
```javascript
class MyComponent extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

## Rendering Component
```javascript
const element = <div/>;
ReactDOM.render(
  element,
  document.getElementById('root');
)

```
Component 也可以是自定义的名称
```javascript
const element = <MyComponent name="superman"/>
function MyComponent(props) {
  return <h1>Hello, {props.name}</h1>
}

ReactDOM.render(
  element,
  document.getElementById('root');
)
```

## 组件的组成
所有的元素都可以作为Component的组成部分，甚至是Component。
```javascript
class Welcome extends React.Component{
  render(){
    return <h1>Hello, {props.name}</h1>
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Welcome name="superman"/>
        <Welcome name="superman1"/>
        <Welcome name="superman2"/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

## Props are read only

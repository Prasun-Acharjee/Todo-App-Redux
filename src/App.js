import React from 'react';
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import {connect} from "react-redux";
import {store} from "./index";
class App extends React.Component{
constructor(props){
  super(props);
  this.state={item:""}
}
handlechange=(event)=>
{
  this.setState({item:event.target.value});
  
}
click=()=>
{
  store.dispatch({type:"ADD_TODO",payload:this.state.item});
  this.setState({item:""});
}
render() {
  console.log(this.props.todos);
  return (
    <div>
    <ToDoInput value={this.state.item} click={this.click} change={this.handlechange} />
    <ToDoList name={this.props.todos}/>
    </div>
  );
}
}
const mapStateToProps=(state)=>
{
  return{todos:state.todo}
}

//export default App;
export default connect(mapStateToProps,null)(App);

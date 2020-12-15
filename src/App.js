import React from 'react';
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { addTodo } from "./Action";

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
  this.props.addTodo(this.state.item)
  this.setState({item:""});
}
render() {
  return (
    <div>
    <ToDoInput value={this.state.item} click={this.click} change={this.handlechange} />
    <ToDoList/>
    </div>
  );
}
}


const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({addTodo},dispatch);
}

//export default App;
export default connect(null,mapDispatchToProps)(App);

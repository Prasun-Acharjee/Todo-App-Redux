import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import {connect} from "react-redux";

class ToDoList extends Component{
    
    render(){
        return(
            <div>
                {
                    this.props.todos.map((element,index)=> <ToDoItem key={element}
                      element={element} index={index} />)
                }
                </div>
        );
    }
}

const mapStateToProps=(state)=>
{
  return{todos:state.todo}
}

export default connect(mapStateToProps,null)(ToDoList);
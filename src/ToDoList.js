import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component{
    
    render(){
        return(
            <div>
                {
                    this.props.name.map((element,index)=> <ToDoItem key={element}
                      element={element} index={index}/>)
                }
                </div>
        );
    }
}
export default ToDoList;
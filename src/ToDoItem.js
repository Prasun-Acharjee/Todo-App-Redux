import React, { Component } from 'react';
import { store } from './index';
class ToDoItem extends Component{
    click=()=>
    {
        store.dispatch({type:"DEL_TODO",payload:this.props.index});
    }
    render(){
        return(
            <div>
                <li>
                {this.props.element}
                <button onClick={this.click}>Delete</button>
                </li>
            </div>
        );
    }
}
export default ToDoItem;
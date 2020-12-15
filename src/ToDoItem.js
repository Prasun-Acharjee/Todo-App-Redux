import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { deleteTodo } from "./Action";
class ToDoItem extends Component{
    click=()=>
    {
        this.props.deleteTodo(this.props.index)
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

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({deleteTodo},dispatch);
  }

export default connect(null,mapDispatchToProps)(ToDoItem);
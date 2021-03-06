import React, { Component } from "react";
import "./App.css";

export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
      }

      addTodo(){
        this.props.addTodo(this.state.value);
        this.setState({value:''});
      }
    
      handleChange(e) {
        this.setState({value: e.target.value});
      }
    
      render() {
      
        return (
          <div class="row">
          <div class="col-md-12">
          <div class="inputline">   
            <input type="text" class="col-md-8 inputtype" value={this.state.value} onChange={this.handleChange} />
            <button className="btn btn-sm col-md-3 btn-lg btn-outline-secondary" onClick={this.addTodo}>Add</button>
          </div> 
          </div>
          </div>
        );
      }
    }
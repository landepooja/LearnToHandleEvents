import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  constructor (){
    super()
    this.state={
      count: 0
    }
    this.increaseCounter = this.increaseCounter.bind(this)
  }

  increaseCounter() {
    console.log("in increaseCounter")
    this.setState( prevState => {
      return {
        count: prevState.count + 1 

      }
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Counter !!</h1>
        <h1>{this.state.count}</h1>
        <Button color="primary" onClick = {this.increaseCounter}>CLick me</Button>{' '}
       
      </div>
       
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Title from "../title";
import Tasks from "../tasks";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

  render() {
    return (
      <div className="App">
       <div className="todo__wrapper">
           <Title/>
           <Tasks/>
       </div>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import * as React from "react";


export default class App extends React.Component {
  

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 1000)
  }
  
  
  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
    }

  
}

export default App;

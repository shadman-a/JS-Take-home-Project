import logo from './logo.svg';
import './App.css';
import * as React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export default class App extends React.Component {
  
  state = {
    render: false
	};


  componentDidMount() {
    setTimeout(function() { 
        this.setState({render: true}) 
    }.bind(this), 5000)
  }

  handleClose = () =>{
    this.setState({
      render: false
    })
  }
  
  modal = () => {
      return (
        <Modal show={this.state.render} onHide={()=>this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>We've got a deal for you</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click below for your very special offer, just for you</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.handleClose()}>
            Claim Now
          </Button>
        </Modal.Footer>
      </Modal>
     );
    
  };
  
  render(){

    return (
      <>
      <div className="App">
        <h1>Public Goods</h1>
      </div>
       {this.modal()}
       </>
    );
    }

  
}


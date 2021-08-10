import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
 
 
  giveMeTuna = () => {
    this.props.retrnimgtite();
    
  }

  render() {

    return (
      <div>
        {this.giveMeTuna} 
        <Modal show={this.props.show} onHide={this.props.handleClose} >
          
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        

        </Modal>
      </div>
    );

  }

}
export default SelectedBeast;

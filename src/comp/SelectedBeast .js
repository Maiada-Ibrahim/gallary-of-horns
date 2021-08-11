import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      show: this.props.show
    };

  }



  // }
  // handleShow = () =>  this.setState({
  //   show: this.state.show = true
  // });
  // handleClose = () =>   this.setState({
  //   show: this.state.show = false
  // });
  //   retrnimgtite = () => {

  //     if (this.props.retrnimgtite() === this.props.title) {
  //       console.log(this.state.imgname);
  //       console.log(this.props.retrnimgtite()) ;



  //     }



  //   };
 
  giveMeTuna = () => {
    this.props.retrnimgtite();
    // this.props.handleClose();
    console.log('hi');
  }
  

  render() {

    return (
      <div>
        <Modal show={this.props.show} onClick={this.props.handleClose} >
          {this.giveMeTunahandleShow}
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body> <img height='150px' width='300px' src={this.props.imageUrl} alt='h' title='h' />
            <br></br>{this.props.description}</Modal.Body>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal>
      </div>
    );

  }

}
export default SelectedBeast;

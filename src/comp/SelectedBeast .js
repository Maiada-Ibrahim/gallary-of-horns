import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      show: false
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
    this.props.handleShow();
  }

  render() {

    return (
      <div>
        { this.props.handleShow()}
        <Modal show={this.show} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

        </Modal>
      </div>
    );

  }

}
export default SelectedBeast;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import { Button } from 'bootstrap';
// import Button from 'react-bootstrap/Button';
// import {Card,Button} from 'react-bootstrap/';
import SelectedBeast from './SelectedBeast ';
// import Modal from 'react-bootstrap/Modal';
import './HornedBeasts.css';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPets: 0,
      imgname: '',
      show: false
    };





  }
  handleShow = () =>  this.setState({
    show: this.state.show = true
  });
  increaseNuOfPets = () => {
    this.setState({
      numberOfPets: this.state.numberOfPets + 1
    });
  };
  retrnimgtite = () => {
    
    this.setState({
      imgname: this.state.imgname = this.props.title
      
     
      
    });
    if (this.state.imgname === this.props.title) {
      
      this.handleShow();
       


    }
    
    
    
    

  };
  handleClose = () =>   this.setState({
    show: this.state.show = false
  });
  render() {


    return (
      <div >

        {/* // <div>  <h2>{this.props.title}</h2>
      //   <img onClick={this.increaseNuOfPets}  src={this.props.imageUrl} alt='h' title='h' />
      //   <p>{this.props.description}</p>
      //   <p> ❤️favorited = {this.state.numberOfPets}</p>
      //   <br /><br /><br /><br /><br /><br /> </div> */}
        <Card onClick={this.retrnimgtite} style={{ width: '25rem' },{ width: '15rem' } }>
          <Card.Img variant="top" onClick={this.increaseNuOfPets} src={this.props.imageUrl} alt='h' title='h'height="150px" width="10rem" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              ❤️favorited = {this.state.numberOfPets}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        {/* <Modal show={this.state.show} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

        </Modal> */}
        < SelectedBeast 
          
          title={this.props.title}
          description={this.props.description}
          imageUrl={this.props.imageUrl}
          retrnimgtite = {this.retrnimgtite}
          handleShow = {this.handleShow}
          show={this.state.show}
          handleClose = {this.handleClose}

          


        />

      </div>
    );

  }
}

export default HornedBeasts;

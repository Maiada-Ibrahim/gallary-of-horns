import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import { Button } from 'bootstrap';
// import Button from 'react-bootstrap/Button';
// import {Card,Button} from 'react-bootstrap/';
import SelectedBeast from './SelectedBeast ';



class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPets: 0,
      imgname: ''
    };





  }

  increaseNuOfPets = () => {
    this.setState({
      numberOfPets: this.state.numberOfPets + 1
    });
  };
  retrnimgtite = () => {
    // console.log(this.state.imgname);
    this.setState({
      imgname: this.state.imgname = this.props.title
    });
    // console.log(this.state.imgname);
    


  };

  render() {


    return (
      <div>

        {/* // <div>  <h2>{this.props.title}</h2>
      //   <img onClick={this.increaseNuOfPets}  src={this.props.imageUrl} alt='h' title='h' />
      //   <p>{this.props.description}</p>
      //   <p> ❤️favorited = {this.state.numberOfPets}</p>
      //   <br /><br /><br /><br /><br /><br /> </div> */}
        <Card onClick={this.retrnimgtite} style={{ width: '18rem' }}>
          <Card.Img variant="top" onClick={this.increaseNuOfPets} src={this.props.imageUrl} alt='h' title='h' />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              ❤️favorited = {this.state.numberOfPets}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        < SelectedBeast 
          
          title={this.props.title}
          description={this.props.description}
          imageUrl={this.props.imageUrl}

        />

      </div>
    );

  }
}

export default HornedBeasts;

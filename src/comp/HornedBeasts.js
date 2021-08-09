import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import {Card,Button} from 'react-bootstrap/';


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPets: 0
    };
  }

  increaseNuOfPets = () => {
    this.setState({
      numberOfPets: this.state.numberOfPets + 1
    });
  };
  render() {
    return (

      // <div>  <h2>{this.props.title}</h2>
      //   <img onClick={this.increaseNuOfPets}  src={this.props.imageUrl} alt='h' title='h' />
      //   <p>{this.props.description}</p>
      //   <p> ❤️favorited = {this.state.numberOfPets}</p>
      //   <br /><br /><br /><br /><br /><br /> </div>
      <Card style={{ width: '18rem' }}>
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
    );

  }
}

export default HornedBeasts;

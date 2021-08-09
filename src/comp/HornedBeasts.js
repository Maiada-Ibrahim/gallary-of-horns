import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (

      <div>  <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt='h' title='h' />
        <p>{this.props.description}</p><br /><br /><br /><br /><br /><br /> </div>
    );

  }
}

export default HornedBeasts;

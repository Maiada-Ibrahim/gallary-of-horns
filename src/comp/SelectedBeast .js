import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      imgname: ''
    };





  }

    retrnimgtite = () => {
      console.log(this.state.imgname);
      this.setState({
        imgname: this.state.imgname = this.props.title
      });
      if (this.state.imgname === this.props.title) {
        console.log(this.state.imgname);
      


      }


   
    };
    render() {

      console.log(this.props.title);
      return (
        <div>
  
        </div>
      );
    
    }
    
}
export default SelectedBeast;

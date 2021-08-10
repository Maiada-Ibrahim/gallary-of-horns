import React from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Main from './comp/Main';
import SelectedBeast from './SelectedBeast ';
import arrayanimal from './data.json';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      imgname: '',
      show: false
    };

  }
  handleShow = () =>  this.setState({
    show: this.state.show = true
  });
  handleClose = () =>   this.setState({
    show: this.state.show = false
  });

  retrnimgtite = () => {
  
    this.setState({
      imgname: this.state.imgname = this.props.title
    });
    if (this.state.imgname === this.props.title) {
      
      this.handleShow();
      
       


    }
    
    
    
    

  };
  render() {
    return (

      <>

        <Header />
        <Main />
        <Footer />
        



      </>
    );

  }
}

export default App;

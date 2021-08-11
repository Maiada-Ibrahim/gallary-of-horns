import React from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Main from './comp/Main';
import SelectedBeast from './comp/SelectedBeast ';
import arrayanimal from './comp/data.json';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datahorrn: arrayanimal,
      setimage: '',
      show: false,
      afterflter: []
    };

  }
  handleShow = () =>  this.setState({
    show: this.state.show = true
  });
  // filterArrayfun = () =>  this.setState({
  //   afterflter: this.state.afterflter = filterArray
  // });
  handleClose = () =>   this.setState({
    show: this.state.show = false
  });
  addevent = () =>   {
    this.state.datahorrn.addEventListener(this.state.datahorrn,this.retrnimgtite);
    
  };

  retrnimgtite = (event) => {
    
    let imgclick = event.target.value;
    console.log(imgclick);
    this.setState({
      imgname: this.state.imgname = imgclick.title
    });
    // let filterArray = arrayanimal.filter(element => {
    //   if (this.state.imgname === element.title) { return true; }
    // }
    
    // );
    if (this.state.imgname === arrayanimal.title) {
      
      this.handleShow();
      
      
      
      
      
    }
    // setimagefun = () =>  this.setState({
    //   setimage: this.state.setimage = true
    // });
    
    
    
    
  };
  render() {
    return (
      
      <>

        <Header />
        <Main datahorrn={this.state.datahorrn} />
        <Footer />
        < SelectedBeast 
          
          title={this.props.title}
          description={this.props.description}
          imageUrl={this.props.imageUrl}
          filterArray = {this.setimagefun}
          retrnimgtite = {this.retrnimgtite}
          handleClose = {this.handleClose}
          show={this.state.show}

          


        />



      </>
    );

  }
}

export default App;

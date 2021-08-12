import React from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Main from './comp/Main';
// import Main from './comp/SelectedBeast ';
import arrayanimal from './comp/data.json';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayanimal: arrayanimal,
      arrayafterfillter:[]


    };
  }
  // updatearray = () =>  this.setState({
  //   arrayafterfillter: this.state.arrayafterfillter = 
  // },
  // );

 
  render() {
    return (

      <>

        <Header />
        
        <Main arrayafterfillter={this.state.arrayafterfillter} onchangefun={this.onchangefun} />
        <Footer />
        <Footer />



      </>
    );

  }
}

export default App;

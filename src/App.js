import React from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Main from './comp/Main';
// import Main from './comp/SelectedBeast ';
import FormDesgin from './comp/FormDesgin';
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

  onchangefun = async (event) => {
    event.preventDefault();

    let newarray=[];
    let arrayafterfillter1 =await this.state.arrayanimal.filter(value => {

      if (value.horns === Number(event.target.value) ) { 
        newarray.push(value);
        return 1;
      }
      

    });
    
    // console.log(arrayafterfillter1);
    
    this.setState({
      arrayafterfillter: this.state.arrayafterfillter = arrayafterfillter1});
    console.log(this.state.arrayafterfillter);
    return arrayafterfillter1;
  };
  render() {
    return (

      <>

        <Header />
        <FormDesgin onchangefun={this.onchangefun}
          arrayafterfillter= {this.state.arrayafterfillter}
        />
        <Main  arrayafterfillter= {this.state.arrayafterfillter} onchangefun={this.onchangefun}/>
        <Footer />
        <Footer />



      </>
    );

  }
}

export default App;

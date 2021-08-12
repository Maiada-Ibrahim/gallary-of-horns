import React from 'react';
import HornedBeasts from './HornedBeasts';
import arrayanimal from './data.json';
// import SelectedBeast from './SelectedBeast ';
import FormDesgin from './FormDesgin';



// let arrayanimal = [{
//   title: "UniWhal",
//   description: "A unicorn and a narwhal nuzzling their horns",
//   imageUrl: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// },

// {
//   title: "Rhino Family",
//   description: "Mother (or father) rhino with two babies",
//   imageUrl: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80.jpg"
// },


// {
//   title: "Unicorn Head",
//   description: "Someone wearing a creepy unicorn head mask",
//   imageUrl: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
// },];


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendernow: arrayanimal,
      arrayafterfillter:[]
    };
    console.log(this.state.rendernow);




  }
  onchangefun = async (event) => {
    event.preventDefault();

    let newarray = [];
    if (Number(event.target.value) === 5) {
      console.log(event.target.value);
      newarray = arrayanimal;
    } else {
      let arrayafterfillter1 = await arrayanimal.filter(value => {


        if (value.horns === Number(event.target.value)) {

          return 1;
        }

        
      });
      newarray = arrayafterfillter1;


      
    }
    this.setState({
      rendernow: this.state.rendernow = newarray
    });
  }





  render() {
    return (

      <div>

     

        {/* < HornedBeasts title="UniWhal" description="A unicorn and a narwhal nuzzling their horns" imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />
        < HornedBeasts title="Rhino Family" description="Mother (or father) rhino with two babies" imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80.jpg" />
        < HornedBeasts title="Unicorn Head" description="Someone wearing a creepy unicorn head mask" imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" /> */}
        {this.state.rendernow.map((item, index) => {
          return (
            <div>
              < HornedBeasts
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.image_url}

              />

             
            </div>
          );
         

        })


        }
        < FormDesgin
          onchangefun={this.onchangefun}

        />
      </div>
      
    );

  }
}

export default Main;

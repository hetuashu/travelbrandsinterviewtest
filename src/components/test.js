import React, { Component } from "react";
import Datatable from './components/datatable';
import Slider from './components/slider';
import './index.css';

 
class App extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      error : null,
      isLoading:false,
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost/TravelBrands_interviewTest/index.php')
      .then((response) => response.json())
      .then(
        // handle the result
        (result) => {
           /*  result.sort( function (a,b) {
              return a > b })
               result.sort(); */
            this.setState({
                isLoaded : true,
                data : result
            });
        },
         // Handle error 
         (error) => {
          this.setState({
              isLoaded: true,
              error
          })
      },
  )
  }
render() {
  const {error, isLoaded, data} = this.state;
  if(error){
      return <div>Error in loading</div>
  }else if (!isLoaded) {
      return <div>Loading ...</div>
  }else{
      return(
        <div className="main">      
        <div className="container">
        <h2>Hotal Search Result</h2>
          <Slider/>
          <Datatable data={data}/>
        </div>
      </div>
      );
  }    
}}
export default App;

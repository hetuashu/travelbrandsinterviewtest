import React, {useState, useEffect}  from 'react';
import Datatable from './components/datatable';
import Slider from '@material-ui/core/Slider';
import './index.css';

function App(props) {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [rangemin, setMinValue] = useState();
  const [rangemax, setMaxValue] = useState();
  const [range, setValue] = useState([rangemin || 50, rangemax ||200]);
  
  /* Get the changeble slider value */
  const handleChange = (event, newRange) => {
    setValue(newRange);      
  };

  /* Get the minimum and maximum value from the data */
  const setRange = (data) => {
    const length = data.length -1;
    setMinValue(data[0].hotelPrice);
    setMaxValue(data[length].hotelPrice); 
  }

  useEffect(() =>{
    fetch('./server/index.php')
    .then((response) => response.json())
    .then((json) => { console.log(json);
      if(json){
        setData(json);
        setRange(json);
      }else{
        console.error("We did not recive the data from server. Please make sure the backend out has been called");
      } 
      return true;
    });   
    
  },[]);

  function valuetext(range) {
    return range;
  }

  /* Query that filter data as per the slider value is change. */
  function pricerange(rows){ 
    return rows.filter(row => {
      const [min, max] = range;      
      return row.hotelPrice >= min && row.hotelPrice <= max;
    });
  }
  
  return (    
    <div className="main">
      <div className="container">
      <h2>Hotal Search Result</h2>
      <div>Price Range</div>
       <div style={{width:300}}>
        <Slider
        value={range}
        min={rangemin}
        max={rangemax}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        /></div>
      <Datatable data={pricerange(data)}/>
      </div>
    </div>
  );
}

export default App;

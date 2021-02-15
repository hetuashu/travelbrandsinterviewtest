import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(pricerange) {
  
  //const {data} = props;
  //console.log(data);
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 200]);
  
  const handleChange = (event, newValue) => {
    //console.log(newValue);
        return setValue(newValue);  
    
  };
  
  return (
     
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <h3>Price Range</h3>
      </Typography>
      <Slider
        value={value}
        min={10}
        max={200}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

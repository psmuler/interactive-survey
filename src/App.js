import React, { useState } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import DraggableState from './DraggableState';
import DraggableChart from './DraggableChart.js';
import labels from './labels.js'; // Import your config

const initialData = () => {
  const array = Array(5)
    .fill()
    .map(() => Math.floor(Math.random() * 2 * 10) / 10);
  return array;
};
const initialChartData = Object.keys(labels).reduce((acc, key) => {
  acc[key] = initialData();
  return acc;
}, {});

function App() {
  const [chartData, setChartData] = useState(initialChartData);
  const [sliderValue, setSliderValue] = useState(3);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const handleSubmit = () => {
    console.log(sliderValue, chartData);
  };
  console.log(labels.chart1);
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" spacing={10}>
        {Object.keys(labels).map((key) => (
          <Grid item key={key}>
            <DraggableChart initialData={chartData[key]} config={labels[key]} />
            <DraggableState onSliderChange={handleSliderChange} />
          </Grid>
        ))}
        <Box m={10}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}

export default App;

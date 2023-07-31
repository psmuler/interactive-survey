import React, { useState } from 'react';
import { Button, Container } from '@material-ui/core';
import DraggableState from './DraggableState';
import DraggableChart from './DraggableChart.js';
import labels from './labels.js'; // Import your config

function App() {
  const initialData = () => {
    const array = Array(5)
      .fill()
      .map(() => Math.floor(Math.random() * 2 * 10) / 10);
    return array;
  };

  const [chartData, setChartData] = useState({
    chart1: initialData(),
    chart2: initialData(),
    chart3: initialData(),
    chart4: initialData(),
  });

  const handleDataChange = (chartName, newData) => {
    setChartData((prevData) => ({
      ...prevData,
      [chartName]: newData,
    }));
  };
  const [sliderValue, setSliderValue] = useState(30);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const handleSubmit = () => {
    console.log(sliderValue, chartData);
  };
  console.log(labels.chart1);
  return (
    <Container maxWidth="sm">
      <DraggableChart
        onDataChange={(newData) => handleDataChange('chart1', newData)}
        initialData={chartData.chart1}
        config={labels.chart1}
      />
      <DraggableChart
        onDataChange={(newData) => handleDataChange('chart2', newData)}
        initialData={chartData.chart2}
        config={labels.chart2}
      />
      <DraggableChart
        onDataChange={(newData) => handleDataChange('chart2', newData)}
        initialData={chartData.chart3}
        config={labels.chart3}
      />
      <DraggableChart
        onDataChange={(newData) => handleDataChange('chart2', newData)}
        initialData={chartData.chart4}
        config={labels.chart4}
      />

      <DraggableState onSliderChange={handleSliderChange} />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}

export default App;

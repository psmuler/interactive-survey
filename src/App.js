import React, { useState } from 'react';
import DraggableChart from './DraggableChart';
import { Button, Container, Typography } from '@material-ui/core';
import DraggableState from './DraggableState';

function App() {
  const initialData = Array(5).fill().map(() => Math.floor(Math.random() * 2 * 10) / 10);

  const [chartData, setChartData] = useState(initialData);
  const [sliderValue, setSliderValue] = useState(30);

  const handleDataChange = (newData) => {
    setChartData(newData);
  }
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  }

  const handleSubmit = () => {
    console.log(sliderValue, chartData);
  }

  return (
    <Container maxWidth="sm">
      <Typography>論文完成時、研究成果の解釈にあなたの解釈が含まれている度合い</Typography>
      <DraggableChart onDataChange={handleDataChange} initialData={chartData} />
      <DraggableState onSliderChange={handleSliderChange} />
      <Button variant='contained' onClick={handleSubmit}>Submit</Button>
    </Container>
  )
}

export default App;
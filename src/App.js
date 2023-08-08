import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@material-ui/core';
import DraggableState from './DraggableState';
import DraggableChart from './DraggableChart.js';
import labels from './labels.js'; // Import your config

const survey_title =
  '以下のような状況がある時に、あなたが研究に対して力の発揮できる状況を分布形状で教えてください。';
const initialData = () => {
  const array = Array(5)
    .fill()
    .map(() => 0.5);
  return array;
};
const initialChartData = Object.keys(labels).reduce((acc, key) => {
  acc[key] = initialData();
  return acc;
}, {});
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // 自分の好きな色に変更
    },
    secondary: {
      main: '#3f51b5', // 自分の好きな色に変更
    },
  },
});

function App() {
  const [chartData, setChartData] = useState(initialChartData);
  const [sliderValue, setSliderValue] = useState(3);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const handleSubmit = () => {
    console.log(sliderValue, chartData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Grid item>
          <Typography variant="h4">{survey_title}</Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid container direction="column">
          {Object.keys(labels).map((key) => (
            <Grid key={key}>
              <DraggableChart
                initialData={chartData[key]}
                config={labels[key]}
              />
              <DraggableState onSliderChange={handleSliderChange} />
            </Grid>
          ))}
          <Box m={10}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

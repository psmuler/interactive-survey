import React, { useEffect, useState } from 'react';
import { Slider, Typography } from '@material-ui/core';

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 1,
    label: 'I',
  },
  {
    value: 2,
    label: 'II',
  },
  {
    value: 3,
    label: 'III',
  },
  {
    value: 4,
    label: 'IV',
  },
  {
    value: 5,
    label: 'V',
  },
];

function DraggableState() {
  return (
    <div>
      <Typography>あなたの研究室が実際どの状況にあるか</Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetext}
        defaultValue={3}
        step={0.1}
        marks={marks}
        min={1.0}
        max={5.0}
        // onChange={handleSliderChange}
      />
    </div>
  );
}

export default DraggableState;

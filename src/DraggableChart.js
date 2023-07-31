import {
  Chart,
  registerables,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React, { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { getInitialOptions } from './options';
import chartjsPluginDragdata from 'chartjs-plugin-dragdata';
import { Typography } from '@material-ui/core';

function DraggableChart({ onDataChange, initialData, config }) {
  const options = getInitialOptions();
  options.data.labels = config.labels;
  options.data.datasets[0].data = initialData;

  Chart.register(
    ...registerables,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    chartjsPluginDragdata,
  );

  return (
    <div>
      <Typography>{config.title}</Typography>
      <Line
        height={200}
        width={'auto'}
        data={options.data}
        options={options.options}
        plugins={[options.options.plugins]}
      />
    </div>
  );
}

export default DraggableChart;

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
import React from 'react';
import { Line } from 'react-chartjs-2';
import { getInitialOptions } from './options';
import chartjsPluginDragdata from 'chartjs-plugin-dragdata';
import { Typography } from '@material-ui/core';

function DraggableChart({ initialData, config }) {
  const options = getInitialOptions(
    config.short_labels,
    config.full_labels,
    initialData,
  );

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
      {config.full_labels.map((label, index) => (
        <Typography key={index}>{label}</Typography>
      ))}
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

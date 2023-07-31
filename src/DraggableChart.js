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
import { options as initialOptions } from './options';
import chartjsPluginDragdata from 'chartjs-plugin-dragdata';
import { Typography } from '@material-ui/core';

function DraggableChart({ onDataChange, initialData, config }) {
  const options = useMemo(() => {
    const newOptions = { ...initialOptions };
    newOptions.data.labels = config.labels;
    newOptions.data.datasets[0].data = initialData;
    newOptions.options.plugins.dragData.onDragEnd = function (
      e,
      datasetIndex,
      index,
      value,
    ) {
      e.target.style.cursor = 'default';
      const newData = [...initialData];
      newData[index] = value;
      onDataChange(newData);
    };

    return newOptions;
  }, [initialData, onDataChange, config]);

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

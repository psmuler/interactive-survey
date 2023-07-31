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
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options as initialOptions } from './options';
import chartjsPluginDragdata from 'chartjs-plugin-dragdata';

function DraggableChart({ onDataChange, initialData }) {
    const [options, setOptions] = useState({ ...initialOptions });
    options.data.datasets[0].data = initialData;

    options.options.plugins.dragData.onDragEnd = function (e, datasetIndex, index, value) {
        e.target.style.cursor = 'default';
        const newData = [...options.data.datasets[0].data];
        newData[index] = value;
        onDataChange(newData);
    };

    Chart.register(...registerables,
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
            <Line height={150} width={'auto'} data={options.data} options={options.options} plugins={[options.options.plugins]} />
        </div>
    )
}

export default DraggableChart;


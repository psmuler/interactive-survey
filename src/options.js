// chartjsで表示させたい情報を定義

export const getInitialOptions = (short_labels, full_labels, dataset) => {
  return {
    type: 'line',
    data: {
      labels: short_labels,
      datasets: [
        {
          data: dataset,
          label: '研究力を発揮できる度合い',
          fill: true,
          tension: 0,
          borderWidth: 2,
          pointHitRadius: 30,
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function (value, index) {
              return short_labels[index];
            },
          },
          offset: true,
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            stepSize: 0.25,
            callback: function (value, index, ticks) {
              return value * 100 + '%';
            },
          },
          min: 0,
          max: 1,
        },
      },
      onHover: function (e) {
        const point = e.chart.getElementsAtEventForMode(
          e,
          'nearest',
          { intersect: true },
          false,
        );
        if (point.length) e.native.target.style.cursor = 'grab';
        else e.native.target.style.cursor = 'default';
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (tooltipItem, data) => {
              // Tooltipのラベルをフルテキストに]
              return full_labels[tooltipItem[0].dataIndex];
            },
          },
        },
        dragData: {
          round: 1,
          showTooltip: true,
          // onDragStart: function (e, datasetIndex, index, value) {
          // },
          onDrag: function (e, datasetIndex, index, value) {
            e.target.style.cursor = 'grabbing';
          },
          onDragEnd: function (e, datasetIndex, index, value) {
            e.target.style.cursor = 'default';
          },
        },
      },
    },
  };
};

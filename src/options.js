// chartjsで表示させたい情報を定義
export const options = {
    type: 'line',
    data: {
        labels: [
            ["1.", "すべて", "自分の解釈"],
            ["2.", "多くが", "自分の解釈"],
            ["3.", "指導教員の解釈", "が半分", "自分の解釈", "が半分"],
            ["4.", "多くが", "指導教員の解釈"],
            ["5.", "すべて", "指導教員の解釈"]
        ],
        datasets: [{
            label: '研究力を発揮できる度合い',
            data: [Math.floor(Math.random() * 2), Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2],
            fill: true,
            tension: 0,
            borderWidth: 2,
            pointHitRadius: 30
        }
        ]
    },
    options: {
        scales: {
            y: {
                min: 0,
                max: 2
            },
        },
        onHover: function (e) {
            const point = e.chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
            if (point.length) e.native.target.style.cursor = 'grab'
            else e.native.target.style.cursor = 'default'
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: (context) => {
                        console.log(context[0].label);
                        return context[0].label.replaceAll(',', '')
                    }
                }
            },
            dragData: {
                round: 1,
                showTooltip: true,
                // onDragStart: function (e, datasetIndex, index, value) {
                // },
                onDrag: function (e, datasetIndex, index, value) {
                    e.target.style.cursor = 'grabbing'
                    // console.log(e, datasetIndex, index, value)
                },
                onDragEnd: function (e, datasetIndex, index, value) {
                    e.target.style.cursor = 'default'
                    // console.log(datasetIndex, index, value)
                },
            }
        }

    }
}

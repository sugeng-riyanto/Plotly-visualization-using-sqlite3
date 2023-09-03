document.addEventListener("DOMContentLoaded", function () {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const xData = data.map(row => row[2]);
            const yData = data.map(row => row[1]);

            const trace = {
                x: xData,
                y: yData,
                type: 'bar',
            };

            const layout = {
                title: 'Score Subject Report',
                xaxis: { title: 'Subjects' },
                yaxis: { title: 'Score' },
            };

            Plotly.newPlot('plotly-chart', [trace], layout);
        });
});

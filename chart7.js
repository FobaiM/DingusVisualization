const jobsCtx = document.getElementById('jobsChart').getContext('2d');
const jobsChart = new Chart(jobsCtx, {
    type: 'line', // Change chart type to 'line'
    data: {
        labels: ['A', ' B', 'C', 'D', 'E'],
        datasets: [
            {
                label: 'Number of Jobs',
                data: [30, 25, 20, 15, 10],
                backgroundColor: 'rgba(92,162,221,0.8)', // Blue background color
                borderColor: 'rgba(92,162,221,1)', // Blue color for the line
                borderWidth: 4, // Increase the line width for a thicker border
                pointRadius: 0, // Remove data points on the line
                pointHoverRadius: 0, // Remove data points on hover
            },
            {
                label: 'Average',
                data: [20, 20, 20, 20, 20], // Replace with actual average values
                backgroundColor: 'rgba(169,169,169,0.5)', // Grey color for the average line
                borderColor: 'rgba(169,169,169,1)',
                borderWidth: 2,
                fill: false, // Do not fill the area under the average line
                pointRadius: 0, // Remove data points on the average line
                pointHoverRadius: 0, // Remove data points on hover for the average line
            },
        ],
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(92,162,221,0)', // Transparent color for x-axis grid lines
                },
                ticks: {
                    color: 'rgba(255,165,0,1)', // Orange color for x-axis ticks
                },
            },
            y: {
                beginAtZero: true,
                type: 'linear',
                position: 'left',
                grid: {
                    color: 'rgba(92,162,221,0)', // Transparent color for y-axis grid lines
                },
                ticks: {
                    color: 'rgba(255,165,0,1)', // Orange color for y-axis ticks
                    callback: function (value, index, values) {
                        return value; // Display y-axis labels without any changes
                    },
                },
            },
        },
        elements: {
            point: {
                radius: 0, // Remove data points on the line
                hoverRadius: 0, // Remove data points on hover
            },
        },
        plugins: {
            legend: {
                display: false, // Do not display the legend for this chart
            },
        },
        clip: true, // Clip chart elements to the chart area
    },
});

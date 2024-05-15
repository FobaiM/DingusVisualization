const historyRamCtx = document.getElementById('historyRamChart').getContext('2d');
const historyRamChart = new Chart(historyRamCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'History Total RAM',
                data: [50, 55, 60, 65, 70],
                backgroundColor: 'rgba(214,154,77,0.2)', // Adjust alpha for transparency
                borderColor: 'rgba(255,165,0,1)', // Orange color for the line
                borderWidth: 2, // Increase the line width for prominence
                tension: 0.4, // Adjust the tension for smoothing
                pointRadius: 0, // Remove data points on the line
                pointHoverRadius: 0, // Remove data points on hover
            },
            {
                label: 'Average',
                data: [60, 60, 60, 60, 60], // Replace with actual average values
                backgroundColor: 'rgba(169,169,169,0.5)', // Grey color for average line
                borderColor: 'rgba(169,169,169,1)', // Grey color for the average line
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
                    color: 'rgba(0, 0, 0, 0)', // Transparent color for x-axis grid lines
                },
                ticks: {
                    color: 'rgba(255,165,0,1)', // Orange color for x-axis ticks
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(0, 0, 0, 0)', // Transparent color for y-axis grid lines
                },
                ticks: {
                    color: 'rgba(255,165,0,1)', // Orange color for y-axis ticks
                },
            },
        },
    },
});

const historyVramCtx = document.getElementById('historyVramChart').getContext('2d');
const historyVramChart = new Chart(historyVramCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'History Total VRAM',
                data: [60, 65, 70, 75, 80],
                backgroundColor: 'rgba(161,116,6,0.2)', // Adjust alpha for transparency
                borderColor: 'rgba(255,255,255,1)', // White color for the line
                borderWidth: 2, // Increase the line width for prominence
                tension: 0.4, // Adjust the tension for smoothing
                pointRadius: 0, // Remove data points on the line
                pointHoverRadius: 0, // Remove data points on hover
            },
            {
                label: 'Average',
                data: [70, 70, 70, 70, 70], // Replace with actual average values
                backgroundColor: 'rgba(105,105,105,0.5)', // Dark grey color for average line
                borderColor: 'rgba(105,105,105,1)',
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
                    color: 'rgba(0,0,0,0)', // Transparent color for x-axis grid lines
                },
                ticks: {
                    color: 'rgba(161,116,6,255)', // Color for x-axis ticks
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(0,0,0,0)', // Transparent color for y-axis grid lines
                },
                ticks: {
                    color: 'rgba(161,116,6,255)', // Color for y-axis ticks
                },
            },
        },
    },
});

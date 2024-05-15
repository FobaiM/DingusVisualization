// chart2.js

// Chart for RAM
const ramCtx = document.getElementById('ramChart').getContext('2d');

// Fetch and parse the CSV data using D3.js
d3.csv('output.csv').then(data => {
    // Assuming each row in CSV represents a different time point, and we want the latest data
    const latestRamData = data[data.length - 1];

    // Define chart configuration for bar chart
    const ramChartConfig = {
        type: 'line',
        data: {
            labels: ['Used', 'Unused'],
            datasets: [{
                label: 'RAM Usage',
                data: [parseFloat(latestRamData.c1_used_RAM), parseFloat(latestRamData.c1_unused_RAM)],
                backgroundColor: [
                    'rgba(255, 165, 0, 1)', // Orange
                    'rgba(255, 255, 255, 1)', // White
                ],
                borderColor: [
                    'rgba(255, 165, 0, 1)', // Orange
                    'rgba(255, 255, 255, 1)', // White
                ],
                borderWidth: 1,
            }],
        },
        options: {
            cutout: '80%',
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Set the maximum value for the y-axis
                    ticks: {
                        stepSize: 10, // Set the step size between ticks
                    },
                },
            },
        },
    };

    // Update chart with dynamic data
    new Chart(ramCtx, ramChartConfig);
});

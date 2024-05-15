const historyCpuCtx = document.getElementById('historyCpuChart').getContext('2d');
const historyCpuChart = new Chart(historyCpuCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'History Total CPU',
                data: [80, 75, 85, 70, 90],
                backgroundColor: 'rgba(74,140,126,0.2)',
                borderColor: 'rgba(74,140,126,255)',
                borderWidth: 2, // Increase the line width for prominence
                tension: 0.4, // Adjust the tension for smoothing
            },
            {
                label: 'Average',
                data: [80, 80, 80, 80, 80], // Replace with actual average values
                backgroundColor: 'rgba(169,169,169,0.5)', // Grey color for average line
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
                    display: false, // Make the x-axis grid invisible
                },
                ticks: {
                    display: false, // Make the x-axis ticks invisible
                    color: 'rgba(255,165,0,1)', // Orange color for x-axis ticks
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    display: false, // Make the y-axis grid invisible
                },
                ticks: {
                    color: 'rgba(255,165,0,1)', // Orange color for y-axis ticks
                },
            },
        },
        elements: {
            line: {
                borderRadius: 15, // Adjust the borderRadius for more rectangular corners
            },
            point: {
                radius: 0, // Remove the data points on the line
            },
        },
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const cpuPercentage = 70; // Percentage of CUP utilization
    const ramPercentage = 50; // Percentage of RAM utilization

    const cpuChart = document.getElementById('cpu-chart');
    const ramChart = document.getElementById('ram-chart');

    createWaffleChart(cpuChart, cpuPercentage);
    createWaffleChart(ramChart, ramPercentage);
});

function createWaffleChart(container, percentage) {
    const totalSquares = 200;
    const filledSquares = Math.round((percentage / 100) * totalSquares);

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (i < filledSquares) {
            square.classList.add('filled');
        }
        container.appendChild(square);
    }
}

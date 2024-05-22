document.addEventListener('DOMContentLoaded', () => {
    const waffleChart = document.getElementById('cpu-waffle-chart');
    const xAxisLabels = document.getElementById('x-axis-labels');

    const ramwaffleChart = document.getElementById('ram-waffle-chart');
    const ramxAxisLabels = document.getElementById('ram-x-axis-labels');

    const generateGradientColor = (percentage) => {
        const startColor = [255, 255, 255]; // Green
        const endColor = [46, 139, 87];   // Red
        const color = startColor.map((start, index) => {
            const end = endColor[index];
            return Math.round(start + (end - start) * (percentage / 100));
        });
        return `rgb(${color.join(',')})`;
    };

    const createWaffleChart = () => {
        const squares = [];
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 37; x++) {
                const square = document.createElement('div');
                square.classList.add('square');
                const cpuUsage = (10 - y) * 10; // CPU usage from 0% to 100%
                square.style.backgroundColor = generateGradientColor(cpuUsage);
                squares.push(square);
            }
        }
        waffleChart.append(...squares);
    };

    const createXAxisLabels = () => {
        for (let i = 0; i <= 50; i += 5) {
            const label = document.createElement('div');
            label.textContent = i;
            xAxisLabels.appendChild(label);
        }
    };

    createWaffleChart();
    createXAxisLabels();

    const ramGenerateGradientColor = (percentage) => {
        const startColor = [255, 255, 255]; // white
        const endColor = [255, 165, 0];   // orange
        const color = startColor.map((start, index) => {
            const end = endColor[index];
            return Math.round(start + (end - start) * (percentage / 100));
        });
        return `rgb(${color.join(',')})`;
    };

    const createRamWaffleChart = () => {
        const squares = [];
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 37; x++) {
                const square = document.createElement('div');
                square.classList.add('square');
                const ramUsage = (10 - y) * 10; // CPU usage from 0% to 100%
                square.style.backgroundColor = ramGenerateGradientColor(ramUsage);
                squares.push(square);
            }
        }
        ramwaffleChart.append(...squares);
    };

    const createRamXAxisLabels = () => {
        for (let i = 0; i <= 50; i += 5) {
            const label = document.createElement('div');
            label.textContent = i;
            ramxAxisLabels.appendChild(label);
        }
    };

    createRamWaffleChart();
    createRamXAxisLabels();
});

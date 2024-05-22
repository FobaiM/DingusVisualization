const vramCtx = document.getElementById('vramChart').getContext('2d');
const vramChart = new Chart(vramCtx, {
    type: 'line',
    data: {
        labels: ['Used', 'Unused'],
        datasets: [{
            label: 'VRAM Usage',
            data: [100, 10,10],
            backgroundColor: [
                'rgba(0,0,0,255)',
                'rgba(0,0,0,255)',
            ],
            borderColor: [
                'rgba(74,140,126,255)',
                'rgba(54,99,90,255)',
            ],
            borderWidth: 1,
        }],
    },
    options: {
        cutout: '80%',
    },
});

// Chart for CPU
const cpuCtx = document.getElementById('cpuChart').getContext('2d');

// Fetch and parse the CSV data using PapaParse
Papa.parse('output.csv', {
    download: true,
    header: true,
    complete: function(results) {
        const data = results.data;
        // Assuming each row in CSV represents a different time point, and we want the latest data
        const latestCpuData = data[data.length - 1];

        // Extract the relevant data for the line chart
        const cpuChartData = [
            { label: 'c1_used_CPU', value: parseFloat(latestCpuData.c1_used_CPU) },
            { label: 'c2_used_CPU', value: parseFloat(latestCpuData.c2_used_CPU) },
            { label: 'c3_used_CPU', value: parseFloat(latestCpuData.c3_used_CPU) },
            { label: 'c4_used_CPU', value: parseFloat(latestCpuData.c4_used_CPU) },
            { label: 'c5_used_CPU', value: parseFloat(latestCpuData.c5_used_CPU) },
            { label: 'c6_used_CPU', value: parseFloat(latestCpuData.c6_used_CPU) },
            { label: 'c7_used_CPU', value: parseFloat(latestCpuData.c7_used_CPU) },
            { label: 'c8_used_CPU', value: parseFloat(latestCpuData.c8_used_CPU) },
            { label: 'c9_used_CPU', value: parseFloat(latestCpuData.c9_used_CPU) },
            { label: 'c10_used_CPU', value: parseFloat(latestCpuData.c10_used_CPU) },
            { label: 'c11_used_CPU', value: parseFloat(latestCpuData.c11_used_CPU) },
            { label: 'c12_used_CPU', value: parseFloat(latestCpuData.c12_used_CPU) },
            { label: 'c13_used_CPU', value: parseFloat(latestCpuData.c13_used_CPU) },
            { label: 'c14_used_CPU', value: parseFloat(latestCpuData.c14_used_CPU) },
            { label: 'c15_used_CPU', value: parseFloat(latestCpuData.c15_used_CPU) },
            { label: 'c16_used_CPU', value: parseFloat(latestCpuData.c16_used_CPU) },
            { label: 'c17_used_CPU', value: parseFloat(latestCpuData.c17_used_CPU) },
            { label: 'c18_used_CPU', value: parseFloat(latestCpuData.c18_used_CPU) },
            { label: 'c19_used_CPU', value: parseFloat(latestCpuData.c19_used_CPU) },
            { label: 'c20_used_CPU', value: parseFloat(latestCpuData.c20_used_CPU) },
            { label: 'c21_used_CPU', value: parseFloat(latestCpuData.c21_used_CPU) },
            { label: 'c22_used_CPU', value: parseFloat(latestCpuData.c22_used_CPU) },
            { label: 'c23_used_CPU', value: parseFloat(latestCpuData.c23_used_CPU) },
            { label: 'c24_used_CPU', value: parseFloat(latestCpuData.c24_used_CPU) },
            { label: 'c25_used_CPU', value: parseFloat(latestCpuData.c25_used_CPU) },
            { label: 'c26_used_CPU', value: parseFloat(latestCpuData.c26_used_CPU) },
            { label: 'c27_used_CPU', value: parseFloat(latestCpuData.c27_used_CPU) },
            { label: 'c28_used_CPU', value: parseFloat(latestCpuData.c28_used_CPU) }
        ];

          // Create a DataTable for Google Charts
          var googleData = new google.visualization.DataTable();
          googleData.addColumn('number', 'CPU');
          googleData.addColumn('number', 'CPU Usage');
  
          // Add data rows
          cpuChartData.forEach((point, index) => {
              googleData.addRow([index, point.y]);
          });
  
          // Define chart options
          var options = {
              chart: {
                  title: 'CPU Usage',
                  subtitle: 'based on CPU'
              },
              width: 800,
              height: 500,
              series: {
                  0: { axis: 'CPU' },
                  1: { axis: 'CPU Usage' }
              },
              axes: {
                  y: {
                      CPU: { label: 'CPU' },
                      'CPU Usage': { label: 'CPU Usage' }
                  }
              }
          };
  
          // Draw the scatter chart
          var scatterChart = new google.visualization.ScatterChart(cpuCtx);
          scatterChart.draw(googleData, options);
      }
  });
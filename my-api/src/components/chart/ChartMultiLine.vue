<template>
    <div
      class="chart-container"
      style="width: 500px; height: 500px; margin-left: 500px; margin-bottom: 30px"
    >
      <canvas id="myChartMultiLine" class="chart"></canvas>
    </div>
  </template>
    
    <script >
  import Chart from "chart.js/auto";
  export default {
    mounted() {
      const ctx = document.getElementById("myChartMultiLine");
      
      const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ["January", "February", "March", "april", "May", "June","July","August","September","October","November","December"],
              datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 65, 40, 70, 51, 54, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'My First Dataset',
      data: [60, 49, 60, 71, 46, 65, 49, 80, 71, 54, 70, 45],
      fill: false,
      borderColor: 'rgb(122, 29, 29)',
      tension: 0.1
    }]
        },
      });
      myChart;
    },
  };
  </script >
    <style scoped>
  .chart {
    width: 50px;
  }
  </style>
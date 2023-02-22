<template>
    <div
      class="chart-container"
      style="width:500px; height:300px;;  margin-top: 30px; margin-bottom: 70px;"
    >
      <canvas id="myChartLine" class="chart"></canvas>
    </div>
  </template>
    
    <script >
  import Chart from "chart.js/auto";
  export default {
    mounted() {
      const ctx = document.getElementById("myChartLine");
      
      const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ["January", "February", "March", "april", "May", "June","July","August","September","October","November","December"],
              datasets: [{
      label: 'user',
      data: [10, 30, 30, 20, 50, 65, 40, 70, 51, 54, 55, 40],
      fill: false,
      backgroundColor: [
                "rgba(54, 162, 235)",
                "#ff7d00",
                "rgba(255,0,0)",
                "rgba(178,34,34)",
                "#FFD400",
                "#ff0022",
                "rgba(255,128,0)",
                "#0047ff",
                "#00ff7f",
                "rgba((47,79,79)",
                "#74ff00",
                "#00d2ff"
              ],
      tension: 0.1
    }]
        },
      });
      myChart;
    },
  };
  </script >
   
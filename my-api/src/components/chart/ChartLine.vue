<template>
  <div
    class="chart-container"
    style="width: 500px; height: 500px; margin-left: 500px; margin-bottom: 30px"
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
        type: 'line',
        data: {
            labels: ["January", "February", "March", "april", "May", "June","July","August","September","October","November","December"],
            datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 65, 40, 70, 51, 54, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
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
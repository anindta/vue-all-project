<template>
    <div
      class="chart-container"
      style="width: 800px; height: 500px; margin-left: 200px; margin-bottom: 10px; margin-top: 30px;"
    >
  <canvas id="myChart"></canvas>

    </div>
  </template>

    
<script>
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
export default{
    mounted(){
        const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "april", "May", "June","July","August","September","October","November","December"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 65, 40, 70, 51, 54, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },{
      label: 'My First Dataset',
      data: [70, 40, 65, 87, 44, 57, 60, 40, 71, 34, 51, 80],
      fill: false,
      borderColor: 'rgb(255,128,0)',
      tension: 0.1
    }]
  },
  options: {
    onClick: (e) => {
      const canvasPosition = getRelativePosition(e, chart);

      // Substitute the appropriate scale IDs
      const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
    }}
});
    }
   
}

</script>
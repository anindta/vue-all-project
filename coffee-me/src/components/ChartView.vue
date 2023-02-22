<template>
  <div class="chart-container" style="width:500px; height: 500px; margin-left:  500px; margin-bottom: 30px; ">

    <canvas id="myChart" class="chart"></canvas>
  </div>
</template>
<script >
import Chart from 'chart.js/auto';
export default {
  mounted(){
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
    'Caffe Latte',
    'Cookies & Cream',
    'Cheese Cake'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(123,63,0)',
      'rgb(255, 205, 86)',
      'rgb(173, 216, 230)'
    ],
    hoverOffset: 4
        }]
    },
    
});
myChart;
  }
}
</script>
<style scoped>
.chart{
  width: 50px;

}
</style>
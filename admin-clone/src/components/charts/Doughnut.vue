<template>
    <div
      class="chart-container"
      style="width:500px; height:400px; margin-left: 60px; "
    >
      <canvas id="myChartDoughnut" class="chart"></canvas>
    </div>
  </template>

    <script >
  import Chart from "chart.js/auto";
  export default {
    mounted() {
      const ctx = document.getElementById("myChartDoughnut");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [
            {
      
              data: [40, 80, 50, 30, 60,75,90],
              backgroundColor: [
                "#FFD400",
                "#ff7d00",
                "#ff0022",
                "#0047ff",
                "#3200ff",
                "#74ff00",
                "#00d2ff"
              
              ],
              borderWidth: 1,
            },
           
          ],
        },
        options: {
          plugins: {
      datalabels: {
        formatter: (value) => {
          return value + '%';
        },
      },
    },
          
        },
      });
      myChart;
    },
  };
  </script>

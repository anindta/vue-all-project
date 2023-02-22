<template>
  <div>
    <div class="container px-4">
      <p class="text-muted">Home/Dashboard</p>
      <div class="row gx-5">
        <div class="col">
          <div class="p-3 bg-white shadow">
            <div></div>
            <font-awesome-icon
              class="text-warning fa-4x"
              icon="fa-solid fa-coins"
            />
          </div>
        </div>
        <div class="col">
          <div class="p-3 bg-white shadow">
           <font-awesome-icon
              class="text-success fa-4x"
              icon="fa-solid fa-wallet"
            /> 
            
          </div>
        </div>
        <div class="col">
          <div class="p-3 bg-white shadow">
            <font-awesome-icon
              class="text-primary fa-4x"
              icon="fa-solid fa-cart-shopping"
            />
          </div>
        </div>
        <div class="col">
          <div class="p-3 bg-white shadow">
            <font-awesome-icon
              class="text-secondary fa-4x"
              icon="fa-solid fa-user "
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container px-4">
      <div class="row gx-5">
    <div class="col mt-4">
      <div class="p-3 bg-white shadow rounded-4"><h4 class="text-center">Weekly Sales</h4><Doughnut/></div>
    </div>
    <div class="col mt-4">
      <div class="p-3 bg-white shadow rounded-4"><h4 class="text-center">Following</h4><Bar /></div>
    
    </div>
  </div>
  </div>
  <div class="container px-4">
      <div class="row gx-5">
    <div class="col mt-4">
      <div class="p-3 bg-white shadow rounded-4"><h4 class="text-center">Month Sales</h4><LineChart/></div>
     
    </div>
    
  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Bar from "@/components/charts/Bar.vue";
import Doughnut from "@/components/charts/Doughnut.vue";
import LineChart from "@/components/charts/LineChart.vue";


export default {
  name: "HomeView",
  components: {
    Bar,
    Doughnut,
    LineChart,
  
  },
};
</script>
<style scoped>
</style>

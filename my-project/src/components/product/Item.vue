<template>
  <div>
    <div>
      <h4 class="text-center">{{ benda.nama }}</h4>
    </div>
    <img :src="benda.image" id="img" class="rounded mx-auto d-block" />
    
    <div>
      <p class="text-center">{{ benda.merek }}</p>
    </div>
    <div>
      <h6 class="text-center">{{ benda.price }}</h6>
    </div>

    <div>
       <button type="button" class="btn btn-warning btn-block mb-4 rounded mx-auto d-block">
              <router-link to="/desk"> <font-awesome-icon icon="fa-brands fa-discord" />Buy</router-link>
              </button>
        
       <router-view />
     <Desk  
        
          :desk="benda"/>
    </div>
  </div>
</template>

<script>
import Desk from "@/components/product/Desk.vue";
export default {
   components: {
    Desk,
  },
  props: ["benda"],
  
};
</script>
<style scoped>
#img {
  width: 200px;
  height:210px;
}
</style>
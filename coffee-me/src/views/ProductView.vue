<template>
  <div>
    <div><JumboTron/></div>
    <div>
        <h2 class="mt-4 text-success border-bottom border-success mx-5">Coffee Cup</h2>
    </div>

    <div class="container">
      <div class="row ">
        <div
          class="col-sm  text-center "
          v-for="(product, index) in products"
          :key="index"
          id="product-gap"
        >
          <span class="p-2 g-col-4">
            <h5>{{ product.name }}</h5></span
          >
          <span class="p-2 g-col-4">
            <img :src="product.image" id="img" class="rounded mx-auto d-block"
          /></span>
          <span class="p-2 g-col-4"> ${{ product.price }}</span>
          <span>
            <button type="button"
              class="btn btn-success btn-block mb-4 rounded mx-auto d-block"
            >
              <router-link class="text-decoration-none text-white" :to="{name:'detail', params:{id: product.id}}">BUY</router-link>
             
            </button>
          </span>
        </div>
      </div>
    </div>
    <div>
        <h2 class="mt-4 text-dark border-bottom border-dark mx-5">Customer's favorite flavour</h2>
    </div>
    <div>
<Chart />
    </div>
  </div>
</template>
<script>
import JumboTron from '@/components/product-content/JumboTron.vue'
import Chart from '@/components/ChartView.vue'
export default {
    components:{JumboTron , Chart },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
<style scoped>
#img {
  width: 200px;
  height: auto;
}
</style>
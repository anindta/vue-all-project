<template>
  <div class="about">
    <div class="container overflow-hidden">
      <p class="text-muted">Products</p>
  <div class="row gy-5">
    <div class="col-6" v-for="(item, index) in items.products"
          :key="index">
      <div class="p-3 bg-white shadow rounded-4"> <h5 class="text-dark">{{item.title}}</h5><br>
        <img :src="item.thumbnail" id="img" class="rounded mx-auto d-block"
          /> <br>
          <p>${{ item.price }}</p>
          <span>
            <button type="button" class="btn btn-danger" @click="deleteData(item.id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
          </span></div>
          
    </div>
   
  </div>
</div>

<div class="container overflow-hidden mt-4">
                <div class="row gy-5">
                  <router-link class="text-decoration-none text-dark fs-5" to="/addproduct"><div class="col-6" type="button">  <button class="p-3 bg-white shadow rounded-4" > <font-awesome-icon class="text-center" icon="fa-solid fa-plus" />
                  <h2> add product</h2></button></div>
                </router-link></div>
              </div>
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["items"]),
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  methods:{
    ...mapActions(["deleteData",]),
  }
}
</script>
<style scoped>

#img {
  width: 250px;
  height: 200px;
}
</style>

<template>
  <div>
    <div><SlideShow /></div>
    <div><ProductOne /></div>
    <div><ProductTwo /></div>
    <div><ProductThree /></div>
  </div>
</template>

<script>
import SlideShow from "@/components/home/SlideShow.vue";
import ProductOne from "@/components/home/ProductOne.vue";
import ProductTwo from "@/components/home/ProductTwo.vue";
import ProductThree from "@/components/home/ProductThree.vue";
export default {
  name: "HomeView",
  components: {
    SlideShow,
    ProductOne,
    ProductTwo,
    ProductThree,
  },
};
</script>

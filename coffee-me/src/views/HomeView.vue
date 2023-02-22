<template>
  <div class="home">
   <div><JumboTron /></div>
    <OurStory />
    <ProductShow/>
    <ProductShowTwo/>
  </div>
</template>

<script>
// @ is an alias to /src
import OurStory from '@/components/home-content/OurStory.vue'
import JumboTron from '@/components/home-content/JumboTron.vue'
import ProductShow from '@/components/home-content/ProductShow.vue'
import ProductShowTwo from '@/components/home-content/ProductShowTwo.vue'

export default {
  name: 'HomeView',
  components: {
    OurStory,
   JumboTron,ProductShow,ProductShowTwo
  }
}
</script>

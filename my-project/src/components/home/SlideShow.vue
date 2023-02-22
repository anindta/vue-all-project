<template>
  <div>
    <b-carousel id="carousel"
     
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480">
      <div
        id="carouselExampleInterval"
        class="carousel slide border border-dark m-2"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="700">
            <img
              src="@/./assets/photo1.png"
              class="d-block w-100"
              id="slide-photo"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img
              src="@/./assets/photo2.jpg"
              class="d-block w-100"
              id="slide-photo"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img
              src="@/./assets/photo3.png"
              class="d-block w-100"
              id="slide-photo"
              alt="..."
            />
          </div>
        </div>
      </div>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: "SlideShow",
  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
  },
};
</script>
<style scoped>
#slide-photo {
  width: 200px;
  height: 500px;
  margin: 10px;
  padding: 30px;
  padding-right: 60px;
}
</style>
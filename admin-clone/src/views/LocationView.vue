<template>
   <div>
      <div class="container ">
     <div class="bg-white static-top mb-5 shadow-lg rounded-4">
        <div class="row mb-4 bg-light static-top mb-5 shadow-lg ">
      <div class="col-md mb-5 mt-3 ">
        <h3>Google Maps</h3>
      <gmap-map
        :center="center"
        :zoom="10"
        style="width:100%;  height: 555px; ">
        <gmap-marker
          :key="index"
          v-for="(gmp, index) in locations"
          :position="gmp"
         
        ></gmap-marker>
      </gmap-map>
   
    </div>
    </div></div>
    </div>
</div>
   

  </template>
   
  <script >
  export default {
    name: "DrawGoogleMap",
    data() {
      return {
        center: { 
            lat: 106.78636524699105, 
            lng: -6.568712621146215
             
        },
        locations: [],
        currentLocation: null
      };
    },
   
    mounted() {
      this.setLocationLatLng();
    },
   
    methods: {
      setPlace(loc) {
        this.currentLocation = loc;
      },
      setLocationLatLng: function() {
          navigator.geolocation.getCurrentPosition(geolocation => {
            this.center = {
              lat: geolocation.coords.latitude,
              lng: geolocation.coords.longitude
            };
          });
   
          this.locations = [
            {
                lat: -6.568749009341761,
                lng: 106.78659003000458,
                label: 'rumah bude'
            },
           
        ];
   
      }
    }
  };
  </script>
  <style>
  </style>
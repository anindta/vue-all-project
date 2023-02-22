<template>
    <div>
      <gmap-map
        :center="center"
        :zoom="10"
        style="width:100%;  height: 555px;">
        <gmap-marker
          :key="index"
          v-for="(gmp, index) in locations"
          :position="gmp"
         
        ></gmap-marker>
      </gmap-map>
   
    </div>
  </template>
   
  <script>
  export default {
    name: "DrawGoogleMap",
    data() {
      return {
        center: { 
            lat: -6.597629, 
            lng: 106.799568
             
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
<template>
    <div>
        <p class="text-muted">User Profile</p>
        <div v-for="users in user.users" :key="users.id">
        <div class="container px-4">
  <div class="row gx-5">
    <div class="col ">
      <div class="p-3 bg-white shadow rounded-4"> <img :src="users.image" id="img" 
          /> </div>
    </div>
    <div class="col">
      <div class="p-3 bg-white shadow rounded-4">  
        <h4 >Profile</h4><br>
        <h4 class="text-muted" >FullName</h4>
        <h5>{{ users.firstName }} {{ users.lastName}}</h5><br>
        <h4 class="text-muted" >Email</h4>
        <h5>{{ users.email }}</h5><br>
        <h4 class="text-muted" >Phone Number</h4>
        <h5>{{ users.phone }}</h5><br>
        <h4 class="text-muted" >University</h4>
        <h5 >{{ users.university}}</h5><br>
     

    </div></div>
    </div>
  </div>
</div>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {}
      }
    },
    mounted() {
      axios.get('https://dummyjson.com/users/search?q=kminchelle')
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  </script>
  <style scoped>
img{
    width: 300px;
   height: 300px;
   object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #5f5f5f,
        0px 0px 0px 5px #ecf0f3,
        8px 8px 15px #a7aaa7,
        -8px -8px 15px #fff;
    margin-left: 100px;
    margin-top: 50px;
    margin-bottom: 90px;
}
</style>
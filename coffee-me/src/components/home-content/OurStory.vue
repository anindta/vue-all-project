<template>
  <div>
  
  <div class="container">
    <div>
       <img
      src="https://i.pinimg.com/564x/37/7f/d4/377fd47ceda51b66d1fe4b04db541267.jpg"
      alt="Avatar"
      class="image "
    />
    </div>
   
    <div class="middle">
      <p>Our Story</p>
      <button type="button" class="btn btn-success text-white">
        <router-link to="/ourstory" class="text-decoration-none text-white">Check This Out!</router-link>
       
      </button>
    </div>
  </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  width:40%;
  margin-top: 30px;

}

.image {
  opacity: 1;
  display: block;
  width: 80%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
    margin-left: 50px;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}
</style>
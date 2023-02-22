<template>
  <div>
  
  <div class="container">
    <div>
       <h1 class="position-absolute top-0 start-50 translate-middle">Yves Saint Laurent</h1>
       <br>
    </div>
    <div>
       <img
      src="@/assets/photo1.png"
      alt="Avatar"
      class="image border border-dark"
    />
    </div>
   
    <div class="middle">
      <p>CLYDE JEANS</p>
      <button type="button" class="btn btn-warning text-dark">
        Check This Out!
      </button>
    </div>
  </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
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
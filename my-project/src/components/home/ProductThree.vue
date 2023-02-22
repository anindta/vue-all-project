<template>
     <section class="menu ">
            <div class="colom">
                <p class="deskripsi text-dark"> Nike</p>
                <h2>Peaceminusone X Nike Air Force 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, animi optio ad voluptates
                    architecto minus itaque sed impedit quod aliquam totam harum non adipisci omnis? Sint aperiam
                    dolorum dolore dolorem.</p>
                <br>
                <p>  <button type="button" class="btn btn-warning text-dark">
            Check Out !
            </button> </p>

            </div >
            <img src="@/assets/nike.png" alt="" class="photo border border-dark">
            </section>
            
</template>
<style scoped>
section {
    margin: auto;
    display: flex;
    margin-bottom: 50px;
}
.colom {
    margin-top: 200px;
    margin-bottom: 100px;
    text-align: center;
}

.colom .deskripsi {
    font-size: 20px;
    font-weight: bold;
    font-family: 'comic sans-ms';
    color: #DFF6FF;
}

h2 {
    font-family:'comic sans-ms';
    font-weight: 800;
    font-size: 60px;
    margin-bottom: 20px;
    width: 100%;
    text-underline-position: auto;
    text-align: center;
}
p {
   
    text-align: center;
}

.photo {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 550px;
    object-position: 0%;
    display: block;
    height: 550px;
  
    margin-right:30px ;
}

</style>
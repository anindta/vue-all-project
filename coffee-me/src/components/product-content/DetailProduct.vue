<template >
    <div id="detail">
         <div >
          <section class="menu " v-if="detail">
            <img :src="detail.image" alt="" class="photo border  border-success-subtle">
            <div class="colom">
                <p class="deskripsi text-dark">Coffe Cup</p>
                <h2> {{ detail.name }}</h2>
                <p>{{ detail.desk }}</p>
                <br>
                <P><button>-</button> 0 <button>+</button></P>

                <p>  <button type="button" class="btn btn-success text-white">
            Check Out !
            </button> </p>

            </div>
            
            </section>
            </div>
    </div>
   
</template>
<script>
export default{
computed:{
    detail(){
        return this.$store.getters.detail(parseInt(this.$route.params.id));
    }
}
}
</script>
<style scoped>
section {
    margin: auto;
    display: flex;
    margin-bottom: 30px;
}
.colom {
    margin-top: 80px;
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
    width: 450px;
    object-position: 0%;
    display: block;
    height: 450px;
    margin-left:30px ;
}

</style>

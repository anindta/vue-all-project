<template >
    <div id="detail">
         <div >
          <section class="menu " v-if="detail">
            <h2> haloo </h2>
            
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

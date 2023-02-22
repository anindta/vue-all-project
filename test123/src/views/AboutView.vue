<template>
  <div>
   <div :class="status ?'success':'failed'">status</div>
   <button @click="status = !status">ubah</button>
   <div :class="[boldClass, greenClass]">test</div>
    </div>
  

</template>
<script>
export default{
  data(){
    return{
    status: true,
    boldClass:'bold',
    greenClass:'success'
    }
  },
  watch:{
    message(value){
      console.log('perubahan yang terjadi di' + value)
    }
  }
}</script>

<style>
.success{
  color: green;

}
.failed{
  color: red;
}
.bold{
  font-weight:700;
}
</style>
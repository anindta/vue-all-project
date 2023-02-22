<template>
  <div class="hello">
 <input type="text" v-model="nama" @keyup="cekStatus" placeholder="ketikkan sesuatu disini" />
  <p v-if="status" >bukan huruf</p>

  <br>
  <ul v-for="hewans in hewan" :key="hewans.id">
    <li >{{ hewans.name }}</li>
     <li >{{ hewans.food }}</li>
      <li >{{ hewans.habitats }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['hewan','orang'],
 
  data() {
    return {
      nama:"",
      status: false,
     
    
    };
  },
  methods: {
    cekStatus() {
      if (isNaN(this.nama)) {
        this.status = true;
      } else {
        this.status = false;
      }
    },
  },
};


</script>



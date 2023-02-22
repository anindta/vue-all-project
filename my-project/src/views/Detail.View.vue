<template>
  <div class="home mt-3">
    <table  class="table">
    <b-tr >
      <th >name Animals</th>
      <th>Animals Food</th>
      <th>animal habitats</th>
      <th>delete</th>
    </b-tr>
    <tr v-for="animal in animals" :key="animal.id">
      <td>{{ animal.name }}</td>
      <td>{{ animal.food}}</td>
      <td>{{ animal.habitats }}</td>
      <td><b-button @click="hapus(animal)" variant="danger">delete</b-button></td>
    </tr>
  </table>

  <div>
    <br />
    <form>
  <div class="form-group  mx-sm-3 mb-2 ">
    <label for="name">Animal Name</label>
    <input type="text" class="form-control " placeholder="Enter name animal"  v-model="add.name">
  </div>
  <div class="form-group  mx-sm-3 mb-2">
    <label for="food">Animal Food</label>
    <input type="text" class="form-control" placeholder="Enter animal food"  v-model="add.food">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="habitats">animal habitats</label>
    <input type="text" class="form-control" placeholder="Enter animal habitats"  v-model="add.habitats" >
  </div>
  <button type="button" class="btn btn-primary" @click="tambah">Add data animals</button>
</form>
    
    <p>jumlah datanya adalah {{ animals.length }}</p>
  </div>
    <HelloWorld :hewan="animals" :orang="person"/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'detailView',
  components: {
    HelloWorld,
  
  },
  data() {
    return {
      animals: [
        { name: "chicken", food: "rice", habitats: "land" , img:'https://i.pinimg.com/564x/ff/94/f6/ff94f69b365a69c9739d82b7f5b4ddd0.jpg' },
        { name: "cat", food: "fish", habitats: "land",img:'https://i.pinimg.com/564x/ff/94/f6/ff94f69b365a69c9739d82b7f5b4ddd0.jpg'  },
        { name: "monkey", food: "banana", habitats: "land",img:'https://i.pinimg.com/564x/ff/94/f6/ff94f69b365a69c9739d82b7f5b4ddd0.jpg'  },
        { name: "fish", food: "chicken", habitats: "sea" },
      ],
      add: {
        name: "",
        food: "",
        habitats: "",
      },
      person: { name: "bla bla", food: "nasi", hobi: "ngoding" },
    
    };
  },
  methods: {
    getDarat() {
      return this.animals.filter((x) => x.habitats == "darat");
    },

    tambah() {
      this.animals.push({
        name: this.add.name,
        food: this.add.food,
        habitats: this.add.habitats,
      });
      this.add = { name: "", food: "", habitat: "" };
    },
    hapus(animal) {
      let i = this.animals.indexOf(animal);
      if (i > -1) {
        this.animals.splice(i, 1);
      }
    },
  },
};

</script>
<style scoped>
table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 15px;
}
</style>


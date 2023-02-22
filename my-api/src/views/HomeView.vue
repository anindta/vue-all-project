<template>
  <div class="about">
    <p>jumlah data {{ items.length }}</p>

    <div>
      <b-button v-b-toggle.sidebar-right class="btn btn-info">
        add data +</b-button
      >
      <b-sidebar id="sidebar-right" title="add data" right shadow>
        <div class="px-3 py-2">
          <form>
            <div class="form-outline mb-4">
              <input
                type="number"
                class="form-control border border-dark"
                v-model="listdata.userId"
              />
              <label class="form-label">userId</label>
            </div>
            <div class="form-outline mb-3 mt-5">
              <input
                type="number"
                class="form-control border border-dark"
                v-model="listdata.id"
              />
              <label class="form-label">id</label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="email"
                class="form-control border border-dark"
                v-model="listdata.title"
              />
              <label class="form-label">title</label>
            </div>
            <div class="form-outline mb-3 mt-5">
              <input
                type="text"
                class="form-control border border-dark"
                v-model="listdata.body"
              />
              <label class="form-label" for="loginName">body</label>
            </div>
            <div>
              <button type="button" class="btn btn-primary" @click="simpan">
                add
              </button>
            </div>
          </form>
        </div>
      </b-sidebar>
    </div>
    <table class="table">
      <b-tr>
        <th scope="col">userId</th>
        <th scope="col">Id</th>
        <th scope="col">title</th>
        <th scope="col">body</th>
      </b-tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.userId }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
       <td> <button type="button" class="btn btn-success ">
              <router-link class="text-decoration-none text-white" :to="{name:'detail', params:{id: item.id}}">Detail</router-link> </button></td>
        <td><b-button v-b-modal.modal-prevent-closing  @click=" showEditForm(item)">update</b-button></td>
        <button type="button" class="btn btn-danger" @click="deleteData(item.id)">
          delete
        </button>
      </tr>
    </table>

    <!-- <NewView :newitems="items"/> -->
     <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
       
        @ok="handleOk"
  
      
    >
      <form ref="form" >
        <b-form-group
          label="UserId"
          label-for="UserId-input"
          invalid-feedback="UserId is required"
        
        >
        
          <b-form-input
            id="name-UserId"
            type="number"
            v-model=" update.userId"
            
            required
          ></b-form-input>
           </b-form-group>
            <b-form-group
          label="id"
          label-for="id-input"
          invalid-feedback="Name is required"
         
        >
        
          <b-form-input
            id="name-input"
             type="number"
            v-model="update.id"
         
            required
          ></b-form-input>
           </b-form-group>

          
          <b-form-group
          label="title"
          label-for="title-input"
          invalid-feedback="Name is required"
         
        >
        
          <b-form-input
            id="name-input"
            v-model="update.title"
           
            required
          ></b-form-input>
           </b-form-group>

           <b-form-group
          label="body"
          label-for="body-input"
          invalid-feedback="Name is required"
        
        >
        
          <b-form-input
            id="name-input"
            v-model="update.body"
      
            required
          ></b-form-input>
           </b-form-group>
          
          
       
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import NewView from "../components/NewView.vue";

export default {
  data() {
    return {
      listdata: {
        userId: "",
        id: "",
        title: "",
        body: "",
      },

      update: {
        userId: "",
        id: "",
        title: "",
        body: "",
      },
    };
  },
  // components: { NewView },
  computed: {
    ...mapState(["items"]),
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  methods: {
    showEditForm(item) {
      this.update = {
        userId: item.userId,
        id: item.id,
        title: item.title,
        body: item.body,
      };
  
     
    },
    ...mapActions(["deleteData","updateData"]),

    simpan() {
      this.$store.dispatch("addData", this.listdata);
      this.listdata = {
        userId: "",
        id: "",
        title: "",
        body: "",
      };
    },
     handleOk() {
       this.$store.dispatch('updateData', this.update);
        this.listdata = {
        userId: "",
        id: "",
        title: "",
        body: "",
      };
      },
  
  },
};
</script>

